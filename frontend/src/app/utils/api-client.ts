// 'use client'
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
// import Auth from './auth'
// class APIClient {
//   private accessToken: string;
//   private refreshToken: string;
//   // private timeOut: number;
//   private api;

//   constructor() {
//     this.accessToken = Auth.getAccessToken();
//     this.refreshToken = Auth.getRefreshToken();
//     this.api = axios.create({
//         baseURL: process.env.NEXT_PUBLIC_BASE_URL,
//     })
   
//   }
//   public setAPIContext(accessToken: string, timeOut: number) {
//     this.accessToken =accessToken;
//     this.timeOut = timeOut;
//   }

//   public proceedRefreshToken() {
//     if(this.refreshToken&&this.timeOut)
//         setTimeout(()=> {


//         },(timeOut - 10*1000))
//   }

//   public get(url: string, config?: AxiosRequestConfig ) : Promise<AxiosResponse> {
//     return this.api.get(url,config);
//   }

//   public patch(url: string, config?: AxiosRequestConfig ) : Promise<AxiosResponse> {
//     return this.api.get(url,config);
//   }

//   public put(url: string, config?: AxiosRequestConfig ) : Promise<AxiosResponse> {
//     return this.api.put(url,config);
//   }
  
//   public deletet(url: string, config?: AxiosRequestConfig ) : Promise<AxiosResponse> {
//     return this.api.delete(url,config);
//   }

// }