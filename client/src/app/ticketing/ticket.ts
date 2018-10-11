import {OrderStatus} from "../enum/orderStatus";
import {ReadStatus} from "../enum/readStatus";
import {OrderType} from "../enum/orderType";
import {OrderPriority} from "../enum/orderPriority";
/**
 * Created by mehr30na on 5/8/17.
 */
export class Ticket {

  public id: number;
  public user_id: number;
  public type: OrderType;
  public title: string;
  public description: string;
  public response: string;
  public orderPriority: OrderPriority;
  public orderStatus: OrderStatus;
  public readStatus: ReadStatus;
  public created_at: string;
  public updated_at: string;



}
