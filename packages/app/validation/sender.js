import {} from "vee-validate";
import {} from "@vee-validate/zod";
import * as zod from "zod";

const addressSchema = zod.object({
  province: zod.string().required("Province is required."),
  district: zod.string().required("District is required."),
  localbody: zod.string().required("Local body is required."),
  wardno: zod.number().max(32).required("Ward number is required."),
  tol: zod.string().required("TOL is required."),
});
const senderSchema = zod.object({
  name: zod.string().required("Name is required."),
  phonenumber: zod.number().required("Phone number is required."),
  type: zod.string().required("Type is required."),
  idnumber: zod.number().required("ID number is required."),
  address: addressSchema,
});

export default senderSchema;
