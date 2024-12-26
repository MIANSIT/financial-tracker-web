import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type FormValues = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: string;
};
type CreateUserProps = {
  onSuccess: () => void; // Callback for successful form submission
};
export default function CreateUser({ onSuccess }: CreateUserProps) {
  const [isClient, setIsClient] = useState(false);
  const [lastGeneratedId, setLastGeneratedId] = useState(0);

  useEffect(() => {
    setIsClient(true);
    // Load last ID from localStorage if available
    const storedLastId = localStorage.getItem("lastGeneratedId");
    setLastGeneratedId(storedLastId ? parseInt(storedLastId, 10) : 0);
  }, []);

  const generateId = (lastId: number) => {
    const newIdNumber = lastId + 1;
    return `M${String(newIdNumber).padStart(4, "0")}`;
  };

  const methods = useForm<FormValues>({
    defaultValues: {
      id: generateId(lastGeneratedId),
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      // Get existing users from localStorage or initialize as an empty array
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

      if (!Array.isArray(existingUsers)) {
        throw new Error("Invalid data in localStorage");
      }

      // Append the new user data to the array
      existingUsers.push(data);

      // Save the updated array back to localStorage
      localStorage.setItem("users", JSON.stringify(existingUsers));

      // Increment the last ID and save it to localStorage
      const newLastId = lastGeneratedId + 1;
      setLastGeneratedId(newLastId);
      localStorage.setItem("lastGeneratedId", String(newLastId));

      // Reset the form with the updated ID
      methods.reset({
        id: generateId(newLastId),
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        role: "",
      });

      // Show success toast
      toast.success("User created successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      onSuccess();
    } catch (error: any) {
      // Show error toast
      toast.error(error.message || "Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <ToastContainer />
      <div className="w-full max-w-md rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Create User</h1>
        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormField
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Auto-generated ID" readOnly />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your First name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your Last name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter User name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Phone Number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Enter your password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Confirm your password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <span>{field.value || "Select a role"}</span>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Super Admin">Super Admin</SelectItem>
                        <SelectItem value="Admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}
