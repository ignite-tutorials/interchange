import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCancelBuyOrder } from "./types/dex/tx";
import { MsgSendSellOrder } from "./types/dex/tx";
import { MsgSendBuyOrder } from "./types/dex/tx";
import { MsgCancelSellOrder } from "./types/dex/tx";
import { MsgSendCreatePair } from "./types/dex/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/interchange.dex.MsgCancelBuyOrder", MsgCancelBuyOrder],
    ["/interchange.dex.MsgSendSellOrder", MsgSendSellOrder],
    ["/interchange.dex.MsgSendBuyOrder", MsgSendBuyOrder],
    ["/interchange.dex.MsgCancelSellOrder", MsgCancelSellOrder],
    ["/interchange.dex.MsgSendCreatePair", MsgSendCreatePair],
    
];

export { msgTypes }