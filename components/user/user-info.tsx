import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";
import { useState, useEffect } from "react";

export function UserInfo() {
  const [userInfo, setUserInfo] = useState<any[]>([]); // to store user data from localStorage
  const [activeRow, setActiveRow] = useState<string | null>(null);

  const toggleMenu = (id: string | null) => {
    setActiveRow(activeRow === id ? null : id);
  };

  useEffect(() => {
    // Fetch users from localStorage when component mounts
    const storedUsers = localStorage.getItem("users");
    
    if (storedUsers) {
      // Parse the stored data
      const users = JSON.parse(storedUsers);
      
      // Map the data to match your desired structure (if needed)
      const formattedUsers = users.map((user: any) => ({
        id: user.id,
        username: user.username,
        fullName: `${user.firstName} ${user.lastName}`,
        role: user.role,
        email: user.email,
        phonenumber: user.phone,
      }));

      setUserInfo(formattedUsers);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

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
              <TableHead>User Role</TableHead>
              <TableHead>Email Address</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userInfo.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.role}</TableCell>
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
                          ? "block scale-100"
                          : "hidden scale-95 pointer-events-none"
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
