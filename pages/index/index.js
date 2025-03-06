
Page({
  
  data:{

    
    
  },
  

  onLoad(query) {
    // Page load
    const caliData = my.getStorageSync({ Key: "Bogota" });
    console.log(caliData);
    
},
  onReady() {
    // Page loading is complete

  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
