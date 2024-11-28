import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDate } from "@/lib/utils"

const recentTransactions = [
  {
    id: "1",
    amount: 1200,
    type: "CREDIT",
    category: "PROJECT_PAYMENT",
    description: "Website Development Payment",
    date: new Date("2024-03-20"),
    client: "Tech Solutions Inc.",
  },
  {
    id: "2",
    amount: 450,
    type: "DEBIT",
    category: "EXPENSE",
    description: "Office Supplies",
    date: new Date("2024-03-19"),
    client: null,
  },
  {
    id: "3",
    amount: 3000,
    type: "CREDIT",
    category: "PROJECT_PAYMENT",
    description: "Mobile App Development",
    date: new Date("2024-03-18"),
    client: "Digital Innovations Ltd",
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-semibold">Recent Transactions</div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Client</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{formatDate(transaction.date)}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.category.replace("_", " ")}</TableCell>
                <TableCell>{transaction.client || "-"}</TableCell>
                <TableCell className={`text-right ${
                  transaction.type === "CREDIT" ? "text-green-600" : "text-red-600"
                }`}>
                  {transaction.type === "CREDIT" ? "+" : "-"}${transaction.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}