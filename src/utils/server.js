const server = {
  get(url, successCallback, failCallback) {
    fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(data => {
      successCallback && successCallback(data);
    }).catch(error => {
      failCallback && failCallback(error);
    });
  },
};

export default server;
