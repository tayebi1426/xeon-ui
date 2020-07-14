import XhrRequest from '../../../util/XhrRequest'

class RemoteDataSource {
    options;

    constructor(options) {
        this.options = options;
    }

    read = (page, pageSize) => {
        let start = (page - 1) * pageSize;
        //console.log({page, pageSize});
        /*  return {
              data: [],
              total: 10
          };*/
       return  XhrRequest.postRequest(this.options['readUrl']);
    };
}

export default RemoteDataSource