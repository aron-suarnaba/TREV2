"use client"
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, ListFilterPlus, BadgeCheck } from "lucide-react"
import * as React from "react"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
    DropdownMenu,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const breadcrumbs = [
    {
        title: 'Transactions',
        href: dashboard().url,
    },
];

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export default function Transactions() {
    const [position, setPosition] = React.useState("date")
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Transactions" />
            <div className="p-4 sm:p-6 lg:p-8">
                {/* <h1 className="text-2xl font-semibold mb-4">Transactions</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    This is the Transactions page. You can display transaction data here.
                </p> */}

                <div className="flex justify-between items-center mb-5 gap-8">
                    <Dialog>
                        {/* 1. Added asChild here */}
                        <DialogTrigger asChild>
                            <Button>Generate TRE</Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-lg">
                            <DialogHeader>
                                <DialogTitle>Generate TRE Transaction</DialogTitle>
                                {/* 2. Kept Description brief and text-only */}
                                <DialogDescription>
                                    Fill out the payment details below to generate TRE Transaction.
                                </DialogDescription>
                            </DialogHeader>

                            <form className="space-y-6 py-4">
                                <div className="space-y-4">

                                    <div className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="card-name">User ID</Label>
                                            <Input id="card-name" placeholder="Evil Rabbit" value="aron.suarnaba@gmail.com" disabled />
                                        </div>

                                        <div className="grid grid-cols-3 gap-2">

                                            <div className="grid gap-2">
                                                <Label htmlFor="month">Month</Label>
                                                <Select>
                                                    <SelectTrigger id="month" className="w-35">
                                                        <SelectValue placeholder="MM" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="january">January</SelectItem>
                                                        <SelectItem value="february">February</SelectItem>
                                                        <SelectItem value="march">March</SelectItem>
                                                        <SelectItem value="april">April</SelectItem>
                                                        <SelectItem value="may">May</SelectItem>
                                                        <SelectItem value="june">June</SelectItem>
                                                        <SelectItem value="july">July</SelectItem>
                                                        <SelectItem value="august">August</SelectItem>
                                                        <SelectItem value="september">September</SelectItem>
                                                        <SelectItem value="october">October</SelectItem>
                                                        <SelectItem value="november">November</SelectItem>
                                                        <SelectItem value="december">December</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="year">Year</Label>
                                                <Select>
                                                    <SelectTrigger id="year" className="w-35">
                                                        <SelectValue placeholder="YYYY" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="2026">2026</SelectItem>
                                                        <SelectItem value="2027">2027</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="quarter">Quarter</Label>
                                                <Input id="quarter" placeholder="1" required />
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                {/* 4. Footer inside the Form so the 'Submit' button works */}
                                <DialogFooter className="pt-4">
                                    <DialogClose asChild>
                                        <Button type="button" variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">Generate</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                    <Input placeholder="Search TRE" className="max-w-75" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline"><ListFilterPlus /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-32">
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>Sort</DropdownMenuLabel>
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                    <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <Table className="px-10">
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Site</TableHead>
                            <TableHead>TRE Number</TableHead>
                            <TableHead>User ID</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>For Approval</TableHead>
                            <TableHead className="text-right">Create Date</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="cursor-pointer">
                            <TableCell className="font-medium">Printwell, Inc.</TableCell>
                            <TableCell>	TRE-PI-2023-07-014</TableCell>
                            <TableCell>user.admin@printwell.com</TableCell>
                            <TableCell>2023, JULY 7</TableCell>
                            <TableCell><Badge>In Process</Badge></TableCell>
                            <TableCell>
                                <Badge variant="secondary">
                                    <BadgeCheck data-icon="inline-start" />
                                    Approved
                                </Badge></TableCell>
                            <TableCell className="text-right">
                                2023-07-24
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="size-8"
                                        >
                                            <MoreHorizontal className="size-4" />
                                            <span className="sr-only">
                                                Open menu
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center">
                                        <DropdownMenuItem>View</DropdownMenuItem>
                                        <DropdownMenuItem>For Approval</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem variant="destructive">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>

                        </TableRow>
                        {invoices.slice(0, 3).map((invoice) => (
                            <TableRow key={invoice.invoice} className="cursor-pointer">
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="size-8"
                                            >
                                                <MoreHorizontal className="size-4" />
                                                <span className="sr-only">
                                                    Open menu
                                                </span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="center">
                                            <DropdownMenuItem>View</DropdownMenuItem>
                                            <DropdownMenuItem>For Approval</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem variant="destructive">
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                    {/* <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                            <TableCell colSpan={1}></TableCell>
                            <TableCell colSpan={1}></TableCell>
                        </TableRow>
                    </TableFooter> */}
                </Table>
            </div>
        </AppLayout>
    );
}
