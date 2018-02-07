import request from 'request';
import { xml2json } from 'xml-js';

export let downloadData = {};

export const requestApi = () => {
  // const fullUrl = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=aq%2F55kYYUW5OyasUGkxxZqyLkE%2Fp6jXOljlTMK2KigCExs9dqSOraCjZZ03KrRQuCGelsyh0QJtjjXGdsTR5pQ%3D%3D&pageNo=1&startPage=1&numOfRows=10&pageSize=10&LAWD_CD=11110&DEAL_YMD=201512';
  const baseUrl = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';
  const serviceKey = 'aq%2F55kYYUW5OyasUGkxxZqyLkE%2Fp6jXOljlTMK2KigCExs9dqSOraCjZZ03KrRQuCGelsyh0QJtjjXGdsTR5pQ%3D%3D';
  const pageNo = 1;
  const startPage = 1;
  const numOfRows = 10;
  const pageSize = 10;
  const LAWD_CD = 11110;
  const DEAL_YMD = 201512;
  const url = `${baseUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&startPage=${startPage}&numOfRows=${numOfRows}&pageSize=${pageSize}&LAWD_CD=${LAWD_CD}&DEAL_YMD=${DEAL_YMD}`;

  const options = {
    method: 'GET',
    url,
  };

  request(options, (error, response, body) => {
    const json = xml2json(body, { compact: true });
    const stringifiedJson = JSON.stringify(json);
    downloadData = stringifiedJson;
    //   parsedJson = JSON.parse(json);

    //   const fileAddr = '/home/junekim/Desktop/dev_meteor/realestate/imports/api/downloaded.json';
    //   // console.log(stringifiedJson);
    //   fs.writeFile(fileAddr, json, 'utf8', (err) => {
    //     console.error(err);
    //   });
  });
};

