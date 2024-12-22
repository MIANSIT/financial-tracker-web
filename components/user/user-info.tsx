import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

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
  const [activeRow, setActiveRow] = useState<string | null>(null);

  const toggleMenu = (id: string | null) => {
    setActiveRow(activeRow === id ? null : id);
  };
  return (
    <div className="space-y-4">
      <div className="text-xl font-semibold">User Information</div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Full Name</TableHead>
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
                <TableCell>
                  <div className="relative">
                    <button
                      className="text-muted-foreground hover:text-primary"
                      onClick={() => toggleMenu(user.id)}
                    >
                      <EllipsisVertical />
                    </button>
                    <div
                      className={`absolute right-0 mt-2 w-32 bg-black border border-gray-300 rounded shadow-lg z-50 transition-all duration-300 ease-in-out transform ${
                        activeRow === user.id
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <button
                        className="w-full px-4 py-2 text-sm text-left text-muted-foreground hover:text-primary"
                        onClick={() => {
                            console.log("Edit", user.id);
                            alert(`Edit: ${user.id}`);
                          }}
                      >
                        Edit
                      </button>
                      <button
                        className="w-full px-4 py-2 text-sm text-left text-muted-foreground hover:text-red-600"
                        onClick={() => {
                            console.log("Delete", user.id);
                            alert(`Delete: ${user.id}`);
                          }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
