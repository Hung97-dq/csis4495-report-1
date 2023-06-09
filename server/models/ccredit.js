import mongoose from "mongoose";

const Schema = mongoose.Schema;


const CreditSchema = new Schema(
  {
    member_id: String,
    emp_title: String,
    emp_length: String,
    home_ownership: String,
    annual_inc: Number,
    dti: Number,
    addr_state: String,
    fico_range_low: Number,
    fico_range_high: Number,
    earliest_cr_line: String,
    open_acc: Number,
    total_acc: Number,
    revol_bal: Number,
    revol_util: Number,
    inq_last_6mths: Number,
    acc_now_delinq: Number,
    delinq_amnt: Number,
    delinq_2yrs: Number,
    mths_since_last_delinq: Number,
    pub_rec: Number,
    mths_since_last_record: Number,
    mths_since_last_major_derog: Number,
    collections_12_mths_ex_med: Number
  }
);

const Credit = mongoose.model("Credit", CreditSchema);

export default Credit;