describe('helpers test(with setup and teardown', ()=>{

    beforeEach(()=>{
        // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });
        
    it('should return a tip total when sumPaymentTotal tipAmt is called',()=>{
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        billAmtInput.value = 1000;
        tipAmtInput.value = 200;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(220);
    }); 

    it('should return a bill total when sumPaymentTotal billAmt is called',()=>{
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        billAmtInput.value = 1000;
        tipAmtInput.value = 200;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(1100);
    }); 

    it('should return a tipPercent total when sumPaymentTotal tipPercent is called',()=>{
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
        billAmtInput.value = 1000;
        tipAmtInput.value = 200;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    }); 

    it('should sum tip percent of a single tip on calculateTipPercent()', ()=> {
        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(1000, 100)).toEqual(10);
      });

      it('should generate new td from value and append to tr on appendTd(tr, value)', ()=> {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });


    afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
      });
});