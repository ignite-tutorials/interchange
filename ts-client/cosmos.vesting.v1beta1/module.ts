// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCreateVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";


export { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount };

type sendMsgCreateVestingAccountParams = {
  value: MsgCreateVestingAccount,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreatePermanentLockedAccountParams = {
  value: MsgCreatePermanentLockedAccount,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreatePeriodicVestingAccountParams = {
  value: MsgCreatePeriodicVestingAccount,
  fee?: StdFee,
  memo?: string
};


type msgCreateVestingAccountParams = {
  value: MsgCreateVestingAccount,
};

type msgCreatePermanentLockedAccountParams = {
  value: MsgCreatePermanentLockedAccount,
};

type msgCreatePeriodicVestingAccountParams = {
  value: MsgCreatePeriodicVestingAccount,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCreateVestingAccount({ value, fee, memo }: sendMsgCreateVestingAccountParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateVestingAccount: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateVestingAccount({ value: MsgCreateVestingAccount.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateVestingAccount: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreatePermanentLockedAccount({ value, fee, memo }: sendMsgCreatePermanentLockedAccountParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreatePermanentLockedAccount: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreatePermanentLockedAccount({ value: MsgCreatePermanentLockedAccount.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreatePermanentLockedAccount: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreatePeriodicVestingAccount({ value, fee, memo }: sendMsgCreatePeriodicVestingAccountParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreatePeriodicVestingAccount: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreatePeriodicVestingAccount({ value: MsgCreatePeriodicVestingAccount.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreatePeriodicVestingAccount: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCreateVestingAccount({ value }: msgCreateVestingAccountParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount", value: MsgCreateVestingAccount.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateVestingAccount: Could not create message: ' + e.message)
			}
		},
		
		msgCreatePermanentLockedAccount({ value }: msgCreatePermanentLockedAccountParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", value: MsgCreatePermanentLockedAccount.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreatePermanentLockedAccount: Could not create message: ' + e.message)
			}
		},
		
		msgCreatePeriodicVestingAccount({ value }: msgCreatePeriodicVestingAccountParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", value: MsgCreatePeriodicVestingAccount.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreatePeriodicVestingAccount: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			CosmosVestingV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;