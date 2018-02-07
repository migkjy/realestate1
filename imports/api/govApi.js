import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { xml2json } from 'xml-js';

Meteor.methods({
  'api.requestData': function () {
    const baseUrl = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';
    const serviceKey = 'aq%2F55kYYUW5OyasUGkxxZqyLkE%2Fp6jXOljlTMK2KigCExs9dqSOraCjZZ03KrRQuCGelsyh0QJtjjXGdsTR5pQ%3D%3D';
    const pageNo = 1;
    const startPage = 1;
    const numOfRows = 10;
    const pageSize = 10;
    const LAWD_CD = 11110;
    const DEAL_YMD = 201512;
    const url = `${baseUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&startPage=${startPage}&numOfRows=${numOfRows}&pageSize=${pageSize}&LAWD_CD=${LAWD_CD}&DEAL_YMD=${DEAL_YMD}`;

    try {
      const res = HTTP.get(url);
      const parsedJsonRes = JSON.parse(xml2json(res.content, { compact: true, spaces: 4 }));
      const itemArray = parsedJsonRes.response.body.items.item;

      return itemArray;
    } catch (e) {
      throw new Meteor.Error(e);
    }
  },
});

