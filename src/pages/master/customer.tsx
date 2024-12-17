import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

interface FormData {
  customerType: string;
  firstname: string;
  lastname: string;
  phone: string;
  gender: string;
  country: string;
  location: string;
  maxCreditLimit: number;
  maxCreditDays: number;
  unpaidCreditAmount: number;
  taxPin: string;
  email: string;
  NIN: string;
}

const Customer = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const mutation = useMutation<FormData, Error, FormData>(
    async (data: FormData) => {
      try {
        const response = await axios.post(
          "https://pos-api-chi.vercel.app/API/v1/customers",
          data
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          throw new Error(error.response.data.message || "An error occurred");
        }
        throw new Error("An unexpected error occurred");
      }
    },
    {
      onSuccess: () => {
        reset();
      },
    }
  );

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex flex-auto flex-shrink-0 antialiased bg-gray-500 text-gray-800">
      <div className="flex flex-row h-screen">
        <Sidebar />
        <div className="p-4 bg-black text-white h-screen">
          <h1 className="text-3xl font-bold mb-4">Customer Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="customerType">
                  Customer Type:
                </label>
                <select
                  className="block w-full p-2 text-lg"
                  id="customerType"
                  {...register("customerType")}
                >
                  <option value="RETAIL">RETAIL</option>
                  <option value="WHOLESALE">WHOLESALE</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="firstname">
                  First Name:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="text"
                  id="firstname"
                  {...register("firstname")}
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="lastname">
                  Last Name:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="text"
                  id="lastname"
                  {...register("lastname")}
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="phone">
                  Phone:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="tel"
                  id="phone"
                  {...register("phone")}
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="gender">
                  Gender:
                </label>
                <select
                  className="block w-full p-2 text-lg"
                  id="gender"
                  {...register("gender")}
                >
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="country">
                  Country:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="text"
                  id="country"
                  {...register("country")}
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="location">
                  Location:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="text"
                  id="location"
                  {...register("location")}
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="maxCreditLimit">
                  Max Credit Limit:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="number"
                  id="maxCreditLimit"
                  {...register("maxCreditLimit", { valueAsNumber: true })}
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="maxCreditDays">
                  Max Credit Days:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="number"
                  id="maxCreditDays"
                  {...register("maxCreditDays", { valueAsNumber: true })}
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label
                  className="block text-lg mb-2"
                  htmlFor="unpaidCreditAmount"
                >
                  Unpaid Credit Amount:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="number"
                  id="unpaidCreditAmount"
                  {...register("unpaidCreditAmount", { valueAsNumber: true })}
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="taxPin">
                  Tax Pin:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="text"
                  id="taxPin"
                  {...register("taxPin")}
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="email"
                  id="email"
                  {...register("email")}
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-3 mb-4">
                <label className="block text-lg mb-2" htmlFor="NIN">
                  NIN:
                </label>
                <input
                  className="block w-full p-2 text-lg"
                  type="text"
                  id="NIN"
                  {...register("NIN")}
                />
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Customer;
