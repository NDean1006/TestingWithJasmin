describe('payments test(with setup and teardown)', ()=>{
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
      });

      it('should create a new payment on createCurPayment()', ()=> {
        let expectedPayment = {
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20,
        }
    
        expect(createCurPayment()).toEqual(expectedPayment);
      });

      
      it('should not create payment with empty input on createCurPayment()', ()=> {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();
    
        expect(curPayment).toEqual(undefined);
      });

      it('should add a new payment to allPayments on submitPaymentInfo()', ()=>{
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
      });

      it('should return undefined with negative or empty inputs', ()=>{
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
      });

      it('should allow paments with a tip value of zero', ()=>{
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
      });

      it('should create table rows and pass to appendTd', ()=>{
        submitPaymentInfo();
        updateSummary();

        let curTdList = document.querySelectorAll('#summaryTable tbody tr td');
        
        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerHTML).toEqual('$100');
        expect(curTdList[1].innerHTML).toEqual('$20');
        expect(curTdList[2].innerHTML).toEqual('20%');

      });

      afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });


});