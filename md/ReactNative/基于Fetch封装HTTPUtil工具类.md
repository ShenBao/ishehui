
#  ����Fetch��װHTTPUtil������

����http����Ĺ����࣬�кܶ࣬Ʃ�磺httpclient��okhttp��AFNetworking ��

��ô����RN�Ĵ���HTTP����Ĺ������أ�Ŀǰ��û���ҵ��������Լ��򵥷�װ��һ������������ﵽ������fetch������

���ˣ������������£�

```
var HTTPUtil = {};

/**
 * ���� fetch ��װ�� GET����
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
HTTPUtil.get = function(url, params, headers) {
    if (params) {
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function (resolve, reject) {
      fetch(url, {
            method: 'GET',
            headers: headers,
          })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              } else {
                  reject({status:response.status})
              }
          })
          .then((response) => {
              resolve(response);
          })
          .catch((err)=> {
            reject({status:-1});
          })
    })
}


/**
 * ���� fetch ��װ�� POST����  FormData ������
 * @param url
 * @param formData  
 * @param headers
 * @returns {Promise}
 */
HTTPUtil.post = function(url, formData, headers) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
            method: 'POST',
            headers: headers,
            body:formData,
          })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              } else {
                  reject({status:response.status})
              }
          })
          .then((response) => {
              resolve(response);
          })
          .catch((err)=> {
            reject({status:-1});
          })
    })
}

export default HTTPUtil;

```

��ôʹ���أ��ٸ��򵥵����Ӱɣ�
```
let formData = new FormData();
formData.append("id",1060);
      
HTTPUtil.post(url,formData,headers).then((json) => {
	//���� ����success
   	if(json.code === 0 ){
            //���Ǽ���ҵ����codeΪ0ʱ����������
        }else{
             //�����Զ����쳣
            this.doException(json);
        }
   },(json)=>{
     //TODO ��������fail
      
})
```














