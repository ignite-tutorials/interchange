// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCancelBuyOrder } from "./types/dex/tx";
import { MsgSendSellOrder } from "./types/dex/tx";
import { MsgSendBuyOrder } from "./types/dex/tx";
import { MsgCancelSellOrder } from "./types/dex/tx";
import { MsgSendCreatePair } from "./types/dex/tx";


export { MsgCancelBuyOrder, MsgSendSellOrder, MsgSendBuyOrder, MsgCancelSellOrder, MsgSendCreatePair };

type sendMsgCancelBuyOrderParams = {
  value: MsgCancelBuyOrder,
  fee?: StdFee,
  memo?: string
};

type sendMsgSendSellOrderParams = {
  value: MsgSendSellOrder,
  fee?: StdFee,
  memo?: string
};

type sendMsgSendBuyOrderParams = {
  value: MsgSendBuyOrder,
  fee?: StdFee,
  memo?: string
};

type sendMsgCancelSellOrderParams = {
  value: MsgCancelSellOrder,
  fee?: StdFee,
  memo?: string
};

type sendMsgSendCreatePairParams = {
  value: MsgSendCreatePair,
  fee?: StdFee,
  memo?: string
};


type msgCancelBuyOrderParams = {
  value: MsgCancelBuyOrder,
};

type msgSendSellOrderParams = {
  value: MsgSendSellOrder,
};

type msgSendBuyOrderParams = {
  value: MsgSendBuyOrder,
};

type msgCancelSellOrderParams = {
  value: MsgCancelSellOrder,
};

type msgSendCreatePairParams = {
  value: MsgSendCreatePair,
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
		
		async sendMsgCancelBuyOrder({ value, fee, memo }: sendMsgCancelBuyOrderParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCancelBuyOrder: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCancelBuyOrder({ value: MsgCancelBuyOrder.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCancelBuyOrder: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSendSellOrder({ value, fee, memo }: sendMsgSendSellOrderParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSendSellOrder: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSendSellOrder({ value: MsgSendSellOrder.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSendSellOrder: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSendBuyOrder({ value, fee, memo }: sendMsgSendBuyOrderParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSendBuyOrder: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSendBuyOrder({ value: MsgSendBuyOrder.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSendBuyOrder: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCancelSellOrder({ value, fee, memo }: sendMsgCancelSellOrderParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCancelSellOrder: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCancelSellOrder({ value: MsgCancelSellOrder.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCancelSellOrder: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSendCreatePair({ value, fee, memo }: sendMsgSendCreatePairParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSendCreatePair: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSendCreatePair({ value: MsgSendCreatePair.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSendCreatePair: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCancelBuyOrder({ value }: msgCancelBuyOrderParams): EncodeObject {
			try {
				return { typeUrl: "/interchange.dex.MsgCancelBuyOrder", value: MsgCancelBuyOrder.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCancelBuyOrder: Could not create message: ' + e.message)
			}
		},
		
		msgSendSellOrder({ value }: msgSendSellOrderParams): EncodeObject {
			try {
				return { typeUrl: "/interchange.dex.MsgSendSellOrder", value: MsgSendSellOrder.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSendSellOrder: Could not create message: ' + e.message)
			}
		},
		
		msgSendBuyOrder({ value }: msgSendBuyOrderParams): EncodeObject {
			try {
				return { typeUrl: "/interchange.dex.MsgSendBuyOrder", value: MsgSendBuyOrder.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSendBuyOrder: Could not create message: ' + e.message)
			}
		},
		
		msgCancelSellOrder({ value }: msgCancelSellOrderParams): EncodeObject {
			try {
				return { typeUrl: "/interchange.dex.MsgCancelSellOrder", value: MsgCancelSellOrder.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCancelSellOrder: Could not create message: ' + e.message)
			}
		},
		
		msgSendCreatePair({ value }: msgSendCreatePairParams): EncodeObject {
			try {
				return { typeUrl: "/interchange.dex.MsgSendCreatePair", value: MsgSendCreatePair.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSendCreatePair: Could not create message: ' + e.message)
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
			InterchangeDex: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;