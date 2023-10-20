
// import service from 'walletService';
import {AccountModel, ChainType} from "../types";
import selfStorage from "../common/storage";

import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';

class WalletWorker {

    constructor() {

    }

    async importMnemonic(mnemonic: string,name:string,password:string,passwordHint:string,avatar:string) {
        const params: any = {
            mnemonic: mnemonic,
            password: password,
            passwordHint:passwordHint,
            avatar:avatar,
            name:name,
        }
        return new Promise((resolve, reject)=>{
            // service.importMnemonic(params, function (data: any) {
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })

    }

    async importPrivateKey(privateKey: string,name:string,password:string,passwordHint:string,avatar:string) {
        const params: any = {
            mnemonic: privateKey,
            password: password,
            passwordHint:passwordHint,
            avatar:avatar,
            name:name,
        }
        return new Promise((resolve, reject)=>{
            // service.importPrivateKey(params, function (data: any) {
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })

    }

    async generateMnemonic(){
        return new Promise((resolve, reject)=>{
            const mm = bip39.generateMnemonic(wordlist);
            resolve(mm)
            // service.generateMnemonic(function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async exportMnemonic(accountId:string,password:string){
        return new Promise((resolve, reject)=>{
            // service.exportMnemonic(accountId,password,function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async exportKeystore(accountId:string){
        return new Promise((resolve, reject)=>{
            // service.exportKeystore(accountId,function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async exportPrivateKey(accountId:string,password:string,chain:ChainType){
        return new Promise((resolve, reject)=>{
            // service.exportPrivateKey(accountId,password,chain,function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async accounts():Promise<Array<AccountModel>> {
        return new Promise<Array<AccountModel>>((resolve, reject)=>{
            // service.accounts(function (data:any){
            //     if(data.error){
            //         console.error(data.error)
            //         reject(data.error);
            //     }else{
            //         const tmp: Array<AccountModel> = data.result;
            //         if(tmp && tmp.length>0){
            //
            //         }
            //         resolve(tmp);
            //     }
            // })
        })
    }

    accountInfoAsync = async (accountId?:string):Promise<any>=>{
        if(!accountId){
            accountId = selfStorage.getItem("accountId");
        }
        return new Promise((resolve, reject) => {
            // service.accountInfo(accountId,function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //         console.log (data.error)
            //     }else{
            //         const tmp:any = data.result;
            //         selfStorage.setItem(accountId,tmp)
            //         resolve(tmp);
            //     }
            // })
        })
    }

    getAccountByAddressAndChainId = async (address:string,chain:ChainType) =>{
        if(!address){
            return Promise.reject("From address can not be null.")
        }
        const accounts:Array<AccountModel> = await this.accounts();
        const accountArr:Array<AccountModel> = accounts.filter(v=>{
            if(address.toLowerCase() == v && v.addresses && v.addresses[chain].toLowerCase()){
                return v
            }
        })
        if(accountArr && accountArr.length > 0 ){
            return accountArr[0]
        }
        return Promise.reject(`Account [${address}] do not exist!`)
    }

    async accountInfo(accountId?:any):Promise<AccountModel>{
        if(!accountId){
            accountId = selfStorage.getItem("accountId");
        }
        if(!accountId){
            // return null;
        }
        return new Promise((resolve, reject)=>{
            if(accountId) {
                const data:any = selfStorage.getItem(accountId);
                if(data && data.addresses){
                    resolve(data)
                }else{
                    // service.accountInfo(accountId,function (data:any){
                    //     if(data.error){
                    //         console.log(data.error);
                    //         reject(data.error)
                    //     }else{
                    //         const tmp:any = data.result;
                    //         resolve(tmp)
                    //         selfStorage.setItem(accountId,tmp)
                    //     }
                    // })
                }
                // service.accountInfo(accountId,function (data:any){
                //     if(data.error){
                //         console.log(data.error);
                //         if(data.error.indexOf("unlock") > -1){
                //             // url.accountUnlock();
                //         }
                //     }else{
                //         const tmp:any = data.result;
                //         selfStorage.setItem(accountId,tmp)
                //     }
                // })
            }else{
                // service.accounts(function (accounts:Array<AccountModel>){
                //     if(accounts && accounts.length>0){
                //         resolve(accounts[0])
                //     }else{
                //         reject("Account not asset!")
                //     }
                // })
            }
        })
    }

    async signTx(accountId:string,password:string,chainType:any,params:any,chainParams?:any) :Promise<any> {
        return new Promise((resolve, reject)=>{
            // service.signTx(accountId,password,chainType,params,chainParams, function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async genNewWallet(accountId:string,password:string,chainType:ChainType){
        return new Promise((resolve, reject) =>{
            // service.genNewWallet({accountId:accountId,password:password,chainType:chainType},function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async unlockWallet(password:string){
        const accountId = selfStorage.getItem("accountId");;
        return new Promise((resolve, reject) =>{
            // service.unlockWallet(accountId,password,function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async isLocked(){
        return new Promise((resolve, reject) =>{
            // service.isLocked(function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async lockWallet(){
        return new Promise((resolve, reject) =>{
            // service.lockWallet(function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async personSignMsg(chainType:ChainType,msg:any,accountId:string):Promise<any> {
        return new Promise((resolve, reject) => {
            // service.personSignMessage(chainType,msg,accountId,function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async signTypedMessage(chainType:ChainType,msg:any,version:string,accountId:string):Promise<any> {
        return new Promise((resolve, reject) => {
            // service.signTypedMessage(chainType,msg,version,accountId,function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async setBackedUp(accountId:string):Promise<any> {
        return new Promise((resolve, reject) => {
            // service.setBackedUp(accountId,function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }


    async removeAccount(accountId:string,password:string) :Promise<any> {
        return new Promise((resolve, reject) => {
            // service.removeAccount(accountId,password,function (data:any){
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })
    }

    async resetAccount(mnemonic: string,password:string) {
        const data: any = {
            mnemonic: mnemonic,
            password: password,
        }
        return new Promise((resolve, reject)=>{
            // service.resetAccount(data, function (data: any) {
            //     if(data.error){
            //         reject(data.error);
            //     }else{
            //         resolve(data.result);
            //     }
            // })
        })

    }
}

const walletWorker = new WalletWorker();
export default walletWorker