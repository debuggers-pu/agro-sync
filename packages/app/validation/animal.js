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

const animalSchema = zod.object({
  vehicle: zod.required("Vehicle is required."),
  sender: zod.required("Sender is required."),
  receivers: zod.required("Receiver is required."),
  onloadtime: zod.string().required("Onload time is required."),
  reason: zod.string().required("Reason is required."),
  offloadtime: zod.string().required("Offload time is required."),
  inspector: zod.required("Inspector is required."),
  doctor: zod.required("Doctor is required."),
  remark: zod.string().required("Remarks is required."),
  quantity: zod.number().required("Quantity is required."),
  animalvalue: zod.required("Animal value is required."),
  onloadlocation: addressSchema,
  offloadlocation: addressSchema,
});

export default animalSchema;
