/*
    Copyright 2022. EMBF Softwares e Investigação
    www.embfinformatica.github.io    
    All Rights Reserved

    This file contains common routines
    for Javascript jobs.

    1) Include it on your HTML File
    Eg.: <stript src="js/tasks.js"></script>

    2) Initiate the class
    Eg.: let tasks = new Tasks();

    3)Invoke the methods
    Eg.: tasks.set("http://example.com");
*/

class Tasks {

    /*
        The constructor does not require any arguments
    */
    constructor() {
        this.latitude = 0;
        this.longitude = 0;
        this.altitude = 0;
    }

    /* 
        Change the current page without open a new tab
    */
    set(url) {
        location.replace(url);
    }

    /* 
        Go to some url with opening a new tab
    */
    go(url) {
        window.open(url);
    }

    /*
        Gets the current date
        in format: day/month/year hour:minutes:secods
    */
    getTime() {
        let date = new Date();

                let hour = date.getHours();
                let min = date.getMinutes();
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();

            return day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + date.getSeconds();
    }

    /*
        Gets the current time
        in format: hour:minute
    */
    getOnlyTime() {
        const date = new Date();

        const hour = date.getHours();
        const min = date.getMinutes();
        let min_ = '0';
        if(min < 10) {
            min_ += min;
        }

        return hour + ':' + min_;
    }

    /*
        Gets the current date
        in format: day/month/year
    */
    getOnlyDate() {
        const date = new Date();

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return day + '/' + month + '/' + year;
    }

    /* 
        Makes an HttpPost Request
        Eg.: tasks.httpPost("http://example.com","param1=hello&param2=world");
    */
    httpPost(url,params, callback) {        

        let xhttp = new XMLHttpRequest();
        xhttp.open("POST",url);
        xhttp.onload = callback;
        
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);        
        
    }

    /*
        Makes an HttpGet Request
        Eg.: tasks.get(http://example.com);
    */
    httpGet(url, callback) {
        

        let xhttp = new XMLHttpRequest();
        xhttp.open("GET",url);
        xhttp.onload = callback;
                
        xhttp.send();     
                

    }

    /*
        sets new cookie
    */
    setCookie(cName) {
        

            let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
            let nums = ['0','1','2','3','4','5','6','7','8','9'];
            let len = chars.length;

            var cValue = "", cookie = "";

            for(var i = 0; i < 15; i++) {

                let index = Math.floor(Math.random() * (len - 1));
                cValue += chars[index];
            }

            for(var i = 0; i < 10; i++) {
                let nIndex = nums.length;
                let index = Math.floor(Math.random() * (nIndex-1));
                cValue += nums[index];
            }

            let d = new Date();
            d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);

            cookie = cName + "=" + cValue + ";expires=" + d.toUTCString() + ";path=/";            
            document.cookie = cookie;            

            return cookie;

        }

        /*
            gets the cookie from Common Name
        */
        getCookie(cName) {
                    
            let name = cName;
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
            }
            
            return "";          

      };

      /* 
        Deletes a Cookie
      */
      deleteCookie(cName) {
        

        let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
        let nums = ['0','1','2','3','4','5','6','7','8','9'];
        let len = chars.length;

        var cValue = "", cookie = "";

        for(var i = 0; i < 15; i++) {

            let index = Math.floor(Math.random() * (len - 1));
            cValue += chars[index];
        }

        for(var i = 0; i < 10; i++) {
            let nIndex = nums.length;
            let index = Math.floor(Math.random() * (nIndex-1));
            cValue += nums[index];
        }

        let d = new Date();
        d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);

        cookie = cName + "=" + "; Max-Age=-99999999;";            
        document.cookie = cookie;            

        return cookie;

    }

      /*
        Returns true if the protocol is Http.
        False, otherwise
      */
      isHttp() {
          if(location.protocol === 'http:') {
              return true;
          } else {
              return false;
          }
      }

      /*
        Returns true if the protocol is Https.
        False, otherwise
      */
      isHttps() {
          if(location.protocol === 'https:') {
              return true;
          } else {
              return false;
          }
      }

      /*
        display an alert dialog
      */
      display(msg) {
          alert(msg);
      }

      /*
        Generates an radom number from a range.
        Eg.: tasks.getRandom(1,10) - 
            A number from 1 to 10.
      */
      getRandom(down,up){
          return Math.floor((Math.random() * up) + down);
      }

      /*
        Initiates the location services
        for calculating the latitude, etc.
        Eg.: tasks.pos();
        Returns true if the call succeeds,
        false otherwise
      */
      pos() {

          if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (coords) {
                
                this.latitude = coords.coords.latitude;
                this.longitude = coords.coords.longitude;
                this.altitude = coords.coords.altitude;

                return true;

            }, function () {
                return false;
            });
          } else {
              return false;
          }
      }

      /* 
        gets the current latitude,
        after the call to pos method
      */
      getLatitude() {
          return this.latitude;
      }

      /*
        gets the current longitude,
        after the call to pos method
      */
      getLongitude() {
          return this.longitude;
      }

      /*
        gets the current altitude,
        after the call to pos method
      */
      getAltitude() {
          return this.altitude;
      }

      hexToRgb(hex) {
        
        let first = hex[1] + hex[2];
        let second = hex[3] + hex[4];
        let third = hex[5] + hex[6];    
        
        let res = [];
        res.push(parseInt(first,16));
        res.push(parseInt(second,16));
        res.push(parseInt(third,16));

        return res;
        
        
      }

      convert(nSrc, bSrc,bOut) {
        
        return parseInt(nSrc,bSrc).toString(bOut);
        
      }
}