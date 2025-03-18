import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Logo from '../../assets/logo.png';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Define the form schema using Zod
const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export function InputOTPForm({ isOpen, onClose, email }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  // Handle form submission
  function onSubmit(data) {
    toast.success("OTP Verification Successful!");
    console.log("OTP Submitted:", data.pin);
    onClose(); // Close the modal after successful submission
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className='text-[#333]'>
          <DialogHeader>
            <DialogTitle className="flex justify-center items-center gap-2">
              <div className="md:w-[2.3rem] w-[2rem]">
                <img className="w-full" src={Logo} alt="Logo" />
              </div>
              <p className="flex md:text-2xl font-bold text-[#333]">EAZETRADES</p>
            </DialogTitle>
            <DialogDescription className="text-center text-[25px] font-[600]">
              Confirm it's you
            </DialogDescription>
          </DialogHeader>
          <p className="text-center font-[300] mb-4">
            Enter the code sent to your email <strong>{email}</strong>.
          </p>
          <hr />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <p className="flex items-center justify-between mt-2"><span>{email}</span><button className="text-[#5F3AFB]">Change</button></p>
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex justify-center mt-4">
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            {[...Array(6)].map((_, index) => (
                              <InputOTPSlot
                                key={index}
                                index={index}
                                className="w-12 h-12 text-lg border-2 rounded-md"
                              />
                            ))}
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </FormControl>
                    <FormMessage className="text-center" />
                  </FormItem>
                )}
              />

              <button className="w-full bg-[#5F3AFB] rounded-[100px] py-3">
                Confirm
              </button>
            </form>
          </Form>

          <p className="text-center text-gray-600 mt-6">
            Didn't receive the code?{" "}
            <button
              type="button"
              className="text-[#5F3AFB] hover:underline"
              onClick={() => toast.info("A new OTP has been sent to your email.")}
            >
              Resend
            </button>
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
