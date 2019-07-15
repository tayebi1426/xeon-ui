import AjaxRequest from '../lib/AjaxRequest'


it('load ', () => {
    AjaxRequest.getRequest('/locales/en/common.json').catch((err) => {
        console.log('err : ', err);
    }).then((res) => {
        console.log('res : ', res);
    });
});