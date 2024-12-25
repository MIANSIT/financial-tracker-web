import { useForm, FormProvider } from "react-hook-form";

import { useEffect, useState } from "react"; // Import useEffect and useState
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

export default function CreateUser() {
  const [isClient, setIsClient] = useState(false); // State to check if on the client side
  const lastGeneratedId = 0;

  useEffect(() => {
    setIsClient(true); // Set to true when mounted on the client side
  }, []);

  // Generate the new ID by incrementing the last ID
  const generateId = (lastId: number) => {
    const newIdNumber = lastId + 1;
    return `M${String(newIdNumber).padStart(4, "0")}`; // Ensures the ID is formatted as M0001, M0002, etc.
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
      role: "", // Default value for role
    },
  });

 // Initialize useRouter for navigation

  const onSubmit = async (data: FormValues) => {
    if (data.password !== data.confirmPassword) {
      // Handle password mismatch
      alert("Passwords do not match");
      return;
    }

    // Store form data in localStorage
    localStorage.setItem("user", JSON.stringify(data));

    console.log("Form Submitted:", data);

    // Redirect to /dashboard/users after successful form submission
    
  };

  if (!isClient) {
    return null; // Avoid rendering if not client-side
  }

  return (
    <div className="flex items-center justify-center">
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
            {/* Role Select Field */}
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
                        <SelectItem value="admin">Super Admin</SelectItem>
                        <SelectItem value="editor">Admin</SelectItem>
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
