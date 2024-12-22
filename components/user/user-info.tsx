import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";

const userinfo = [
  {
    id: "M0001",
    username: "shahnawroz",
    fullName: "Shah Nawrose",
    email: "nawrose.mians@gmail.com",
    phonenumber: "01761867763",
  },
  {
    id: "M0002",
    username: "rafsanratul",
    fullName: "Rafsan Jani Ratul",
    email: "ratul.mains@gmail.com",
    phonenumber: "01833228622",
  },
  {
    id: "M0003",
    username: "saminsharar",
    fullName: "Samin Sharar",
    email: "saminsharar2@gmail.com",
    phonenumber: "017......",
  },
  {
    id: "M0004",
    username: "saminsharar",
    fullName: "Samin Sharar",
    email: "saminsharar2@gmail.com",
    phonenumber: "017......",
  },
];

export function UserInfo() {
  return (
    <div className="space-y-4">
       
      <div className="text-xl font-semibold ">
        User Information</div>
       
     
     

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>FullName</TableHead>
              <TableHead>Email Address</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userinfo.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phonenumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
