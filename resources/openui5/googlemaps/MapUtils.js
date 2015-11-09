sap.ui.define(["jquery.sap.global","google.maps"],function(e,o){"use strict";var t={};return t.objToLatLng=function(e){return new o.LatLng(e.lat,e.lng)},t.latLngToObj=function(e){return{lat:e.lat(),lng:e.lng()}},t.floatEqual=function(e,o){return Math.abs(e-o)<1e-6},t.latLngEqual=function(e,o){return this.floatEqual(e.lat,o.lat)&&this.floatEqual(e.lng,o.lng)},t.search=function(t){var n=e.Deferred();return(new o.Geocoder).geocode(t,n.resolve),n.promise()},t.currentPosition=function(){var o=e.Deferred(),t={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},n=function(e){var t={};t.lat=e.coords.latitude,t.lng=e.coords.longitude,o.resolve(t)},r=function(t){e.sap.log.info("ERROR("+t.code+"): "+t.message),o.reject(t)};return navigator.geolocation&&navigator.geolocation.getCurrentPosition(n,r,t),o.promise()},t.geocodePosition=function(t){var n=e.Deferred(),r=function(e){e&&e.length>0?n.resolve(e[0].formatted_address):n.reject("Cannot determine address at this location.")};return(new o.Geocoder).geocode({latLng:t},r),n.promise()},t},!0);