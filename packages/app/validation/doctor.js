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

const doctorSchema = zod.object({
  name: zod.string().required("Name is required."),
  phonenumber: zod.number().required("Phone number is required."),
  nmc:zod.string().required("NMC is required."),
  address: addressSchema,
});

export default doctorSchema;