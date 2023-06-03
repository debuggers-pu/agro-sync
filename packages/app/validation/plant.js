import {} from "vee-validate";
import {} from "@vee-validate/zod";
import * as zod from "zod";

const productionAddressSchema = zod.object({
   province: zod.string().required("Province is required."),
  district: zod.string().required("District is required."),
  localbody: zod.string().required("Local body is required."),
  wardno: zod.number().max(32).required("Ward number is required."),
  tol: zod.string().required("TOL is required."),
});

const plantSchema = zod.object({
  plantvalue: zod.required("Plant value is required."),
  quantity: zod.number().required("Quantity is required."),
  typeofinspection: zod.required("Type of inspection is required."),
  date: zod.string().required("Date is required."),
  serialnumber: zod.string().required("Serial number is required."),
  inspector: zod.required("Inspector is required."),
  sender: zod.required("Sender is required."),
  remarks: zod.string().required("Remarks is required."),
  productionAddress: productionAddressSchema,
  inspectionlocation: productionAddressSchema,
});

export default plantSchema;

