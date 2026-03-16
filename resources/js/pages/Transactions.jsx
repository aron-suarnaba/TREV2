"use client"
import AppLayout from '@/layouts/app-layout';
import { router, Head } from '@inertiajs/react';
import { dashboard, items } from '@/routes';
import transactionsRoutes from '@/routes/transactions';
import { Button } from '@/components/ui/button';
import {
    MoreHorizontal, ListFilterPlus, BadgeCheck, Search, Clock, Eye,
    Zap,
    Pencil,
    CheckCircle,
    Trash2
} from "lucide-react"
import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
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
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const breadcrumbs = [
    { title: 'Transactions', href: dashboard().url },
];

// const transactions = [
//     {
//         site: "Printwell, Inc.",
//         treNumber: "TRE-PI-2026-05-03",
//         userid: "user.admin@printwell.com.ph",
//         date: "2026, March 5",
//         status: "In Process",
//         forApproval: true,
//         createDate: "2026-05-03",
//     },
//     {
//         site: "Printwell, Inc.",
//         treNumber: "TRE-EPS-2026-03-01",
//         userid: "j.delacruz@ecopack.com",
//         date: "2026, March 1",
//         status: "Approved",
//         forApproval: false,
//         createDate: "2026-03-01",
//     },
//     {
//         site: "Fortune Packaging, Inc.",
//         treNumber: "TRE-GLL-2026-02-28",
//         userid: "m.santos@globallog.ph",
//         date: "2026, February 28",
//         status: "In Process",
//         forApproval: true,
//         createDate: "2026-02-28",
//     },
//     {
//         site: "Printwell, Inc.",
//         treNumber: "TRE-TSS-2026-02-15",
//         userid: "admin.tech@stream.com",
//         date: "2026, February 15",
//         status: "In Process",
//         forApproval: true,
//         createDate: "2026-02-15",
//     },
//     {
//         site: "Printwell Packaging Corp.",
//         treNumber: "TRE-PI-2026-02-10",
//         userid: "onyok.velasco@gmail.com",
//         date: "2026, February 10",
//         status: "Exported",
//         forApproval: false,
//         createDate: "2026-02-10",
//     },
// ]


export default function Transactions({ transactions }) {
    const { data = [], links = [], current_page = 1, last_page = 1 } = transactions ?? {};

    const [position, setPosition] = React.useState("date");
    const [activeTransaction, setActiveTransaction] = React.useState(null);
    const [editOpen, setEditOpen] = React.useState(false);
    const [editForm, setEditForm] = React.useState({
        site: '',
        treNumber: '',
        userid: '',
        year: '',
        month: '',
        period: '',
        quarter: '',
        statusCode: 'I',
        isForApproval: false,
    });

    const statusStyles = {
        "In Process": "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
        "Approved": "bg-green-100 text-green-800 hover:bg-green-100/80",
        "Exported": "bg-red-100 text-red-800 hover:bg-red-100/80",
    };

    const months = [
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
    ];

    const statusLabels = {
        I: 'In Process',
        A: 'Approved',
        E: 'Exported',
    };

    const handleDelete = (transactionId, treNumber) => {
        if (!window.confirm(`Delete transaction ${treNumber}?`)) {
            return;
        }

        router.delete(transactionsRoutes.destroy(transactionId).url, {
            preserveScroll: true,
        });
    };

    const openEditDialog = (transaction) => {
        setEditForm({
            site: transaction.site ?? '',
            treNumber: transaction.treNumber ?? '',
            userid: transaction.userid ?? '',
            year: transaction.year ?? '',
            month: transaction.month ?? '',
            period: transaction.period ?? '',
            quarter: transaction.quarter ?? '',
            statusCode: transaction.statusCode ?? 'I',
            isForApproval: Boolean(transaction.isForApproval),
        });
        setActiveTransaction(transaction);
        setEditOpen(true);
    };

    const isEditLocked = activeTransaction && ['A', 'E'].includes(activeTransaction.statusCode);
    const lockedLabel = activeTransaction ? statusLabels[activeTransaction.statusCode] ?? activeTransaction.status : null;

    const handleEditSubmit = (event) => {
        event.preventDefault();

        if (!activeTransaction || isEditLocked) {
            return;
        }

        router.put(
            transactionsRoutes.update(activeTransaction.id).url,
            {
                site: editForm.site,
                tre_num: editForm.treNumber,
                user_id: editForm.userid,
                year: Number(editForm.year),
                month: editForm.month,
                period: Number(editForm.period),
                quarter: Number(editForm.quarter),
                status: editForm.statusCode,
                is_for_approval: Boolean(editForm.isForApproval),
            },
            {
                preserveScroll: true,
                onSuccess: () => setEditOpen(false),
            },
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Transactions" />
            <div className="p-4 sm:p-6 lg:p-8">

                <div className="flex justify-between items-center mb-5 gap-8">

                    {/* This is the modal for generation of TRE Transactions */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Generate TRE</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-lg">
                            <DialogHeader>
                                <DialogTitle>Generate TRE Transaction</DialogTitle>
                                <DialogDescription>
                                    Fill out the payment details below to generate TRE Transaction.
                                </DialogDescription>
                            </DialogHeader>

                            <form className="space-y-6 py-4">
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="user-id">User ID</Label>
                                        <Input id="user-id" value="user.admin@example.com" disabled />
                                    </div>

                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="grid gap-2">
                                            <Label htmlFor="month">Month</Label>
                                            <Select>
                                                <SelectTrigger id="month">
                                                    <SelectValue placeholder="MM" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="january">January</SelectItem>
                                                    <SelectItem value="february">February</SelectItem>
                                                    {/* ... add others */}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="year">Year</Label>
                                            <Select>
                                                <SelectTrigger id="year">
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
                                            <Input type="number" max="5" min="0" id="quarter" placeholder="1" required />
                                        </div>
                                    </div>
                                </div>

                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button" variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">Generate</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>

                    {/* This is the search input */}
                    <div className="flex items-center gap-2">
                        <div className="relative max-w-xs">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search TRE..."
                                className="pl-9"
                            />
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon"><ListFilterPlus className="size-4" /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-32" align="end">
                                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                    <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="rounded-md">
                    <Table>
                        <TableCaption>A list of recent TRE transactions.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Site</TableHead>
                                <TableHead>TRE Number</TableHead>
                                <TableHead>User ID</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>For Approval</TableHead>
                                <TableHead className="text-right">Create Date</TableHead>
                                <TableHead className="text-right w-[100px]">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((transaction, index) => (
                                <TableRow
                                    key={transaction.id}
                                    className="cursor-pointer hover:bg-muted/50"
                                    onClick={() => router.visit(items().url)}
                                >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell className="font-medium">{transaction.site}</TableCell>
                                    <TableCell>{transaction.treNumber}</TableCell>
                                    <TableCell className="text-muted-foreground">{transaction.userid}</TableCell>
                                    <TableCell>{transaction.date}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className={statusStyles[transaction.status]}>
                                            {transaction.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {transaction.forApproval ? (
                                            <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                                                <BadgeCheck className="mr-1.5 size-3.5" />
                                                Approved
                                            </Badge>
                                        ) : (
                                            <Badge variant="outline" className="text-muted-foreground">
                                                <Clock className="mr-1.5 size-3.5" />
                                                Pending
                                            </Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right text-muted-foreground">{transaction.createDate}</TableCell>
                                    <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild className="outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent">
                                                <Button variant="ghost" size="icon" className="size-8">
                                                    <MoreHorizontal className="size-4" />
                                                    <span className="sr-only">Open menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent align="end">
                                                {/* View Details Icon added */}
                                                <DropdownMenuItem onClick={() => router.visit(transactionsRoutes.edit(transaction.id).url)}>
                                                    <Eye className="mr-2 size-4" />
                                                    View Details
                                                </DropdownMenuItem>

                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <DropdownMenuItem
                                                            onSelect={(event) => event.preventDefault()}
                                                            onClick={() => setActiveTransaction(transaction)}
                                                        >
                                                            {/* Quick View Icon added */}
                                                            <Zap className="mr-2 size-4" />
                                                            Quick View
                                                        </DropdownMenuItem>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-md">
                                                        <DialogHeader>
                                                            <DialogTitle>Transaction Summary</DialogTitle>
                                                            <DialogDescription>
                                                                Quick view of this TRE transaction.
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="grid gap-2 text-sm">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-muted-foreground">TRE Number</span>
                                                                <span className="font-medium">{activeTransaction?.treNumber}</span>
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-muted-foreground">Site</span>
                                                                <span className="font-medium">{activeTransaction?.site}</span>
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-muted-foreground">User ID</span>
                                                                <span className="font-medium">{activeTransaction?.userid}</span>
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-muted-foreground">Status</span>
                                                                <span className="font-medium">{activeTransaction?.status}</span>
                                                            </div>
                                                        </div>
                                                        <DialogFooter>
                                                            <DialogClose asChild>
                                                                <Button variant="outline">Close</Button>
                                                            </DialogClose>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>

                                                <Dialog open={editOpen} onOpenChange={setEditOpen}>
                                                    <DialogTrigger asChild>
                                                        <DropdownMenuItem
                                                            onSelect={(event) => event.preventDefault()}
                                                            onClick={() => openEditDialog(transaction)}
                                                        >
                                                            <Pencil className="mr-2 size-4" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-2xl">
                                                        <DialogHeader>
                                                            <DialogTitle>Edit Transaction</DialogTitle>
                                                            <DialogDescription>
                                                                Update transaction details when status is In Process.
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        {isEditLocked && (
                                                            <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                                                                This transaction is already {lockedLabel} and can no longer be edited.
                                                            </div>
                                                        )}
                                                        <form onSubmit={handleEditSubmit} className="space-y-6">
                                                            <div className="grid gap-4">
                                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                                    <div className="grid gap-2">
                                                                        <Label htmlFor="edit-site">Site</Label>
                                                                        <Input
                                                                            id="edit-site"
                                                                            value={editForm.site}
                                                                            onChange={(event) => setEditForm((prev) => ({ ...prev, site: event.target.value }))}
                                                                            disabled={isEditLocked}
                                                                        />
                                                                    </div>
                                                                    <div className="grid gap-2">
                                                                        <Label htmlFor="edit-tre-number">TRE Number</Label>
                                                                        <Input
                                                                            id="edit-tre-number"
                                                                            value={editForm.treNumber}
                                                                            onChange={(event) => setEditForm((prev) => ({ ...prev, treNumber: event.target.value }))}
                                                                            disabled={isEditLocked}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                                    <div className="grid gap-2">
                                                                        <Label htmlFor="edit-user-id">User ID</Label>
                                                                        <Input
                                                                            id="edit-user-id"
                                                                            value={editForm.userid}
                                                                            onChange={(event) => setEditForm((prev) => ({ ...prev, userid: event.target.value }))}
                                                                            disabled={isEditLocked}
                                                                        />
                                                                    </div>
                                                                    <div className="grid gap-2">
                                                                        <Label htmlFor="edit-year">Year</Label>
                                                                        <Input
                                                                            id="edit-year"
                                                                            type="number"
                                                                            min="1900"
                                                                            max="2100"
                                                                            value={editForm.year}
                                                                            onChange={(event) => setEditForm((prev) => ({ ...prev, year: event.target.value }))}
                                                                            disabled={isEditLocked}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                                                    <div className="grid gap-2">
                                                                        <Label htmlFor="edit-month">Month</Label>
                                                                        <Select
                                                                            value={editForm.month}
                                                                            onValueChange={(value) => setEditForm((prev) => ({ ...prev, month: value }))}
                                                                            disabled={isEditLocked}
                                                                        >
                                                                            <SelectTrigger id="edit-month">
                                                                                <SelectValue placeholder="Select month" />
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                {months.map((month) => (
                                                                                    <SelectItem key={month} value={month}>
                                                                                        {month}
                                                                                    </SelectItem>
                                                                                ))}
                                                                            </SelectContent>
                                                                        </Select>
                                                                    </div>
                                                                    <div className="grid gap-2">
                                                                        <Label htmlFor="edit-period">Period</Label>
                                                                        <Input
                                                                            id="edit-period"
                                                                            type="number"
                                                                            min="1"
                                                                            max="12"
                                                                            value={editForm.period}
                                                                            onChange={(event) => setEditForm((prev) => ({ ...prev, period: event.target.value }))}
                                                                            disabled={isEditLocked}
                                                                        />
                                                                    </div>
                                                                    <div className="grid gap-2">
                                                                        <Label htmlFor="edit-quarter">Quarter</Label>
                                                                        <Input
                                                                            id="edit-quarter"
                                                                            type="number"
                                                                            min="1"
                                                                            max="4"
                                                                            value={editForm.quarter}
                                                                            onChange={(event) => setEditForm((prev) => ({ ...prev, quarter: event.target.value }))}
                                                                            disabled={isEditLocked}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                                    <div className="grid gap-2">
                                                                        <Label htmlFor="edit-status">Status</Label>
                                                                        <Select
                                                                            value={editForm.statusCode}
                                                                            onValueChange={(value) => setEditForm((prev) => ({ ...prev, statusCode: value }))}
                                                                            disabled={isEditLocked}
                                                                        >
                                                                            <SelectTrigger id="edit-status">
                                                                                <SelectValue placeholder="Select status" />
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                {Object.entries(statusLabels).map(([value, label]) => (
                                                                                    <SelectItem key={value} value={value}>
                                                                                        {label}
                                                                                    </SelectItem>
                                                                                ))}
                                                                            </SelectContent>
                                                                        </Select>
                                                                    </div>
                                                                    <div className="flex items-center gap-3 rounded-md border p-3">
                                                                        <Checkbox
                                                                            id="edit-for-approval"
                                                                            checked={editForm.isForApproval}
                                                                            onCheckedChange={(value) =>
                                                                                setEditForm((prev) => ({ ...prev, isForApproval: Boolean(value) }))
                                                                            }
                                                                            disabled={isEditLocked}
                                                                        />
                                                                        <Label htmlFor="edit-for-approval">For Approval</Label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <DialogFooter className="gap-2">
                                                                <DialogClose asChild>
                                                                    <Button type="button" variant="outline">
                                                                        Cancel
                                                                    </Button>
                                                                </DialogClose>
                                                                <Button type="submit" disabled={isEditLocked}>
                                                                    Save Changes
                                                                </Button>
                                                            </DialogFooter>
                                                        </form>
                                                    </DialogContent>
                                                </Dialog>

                                                {/* For Approval Icon added */}
                                                <DropdownMenuItem>
                                                    <CheckCircle className="mr-2 size-4" />
                                                    For Approval
                                                </DropdownMenuItem>

                                                <DropdownMenuSeparator />

                                                <DropdownMenuItem
                                                    variant="destructive"
                                                    onClick={() => handleDelete(transaction.id, transaction.treNumber)}
                                                >
                                                    <Trash2 className="mr-2 size-4" />
                                                    Delete
                                                </DropdownMenuItem>

                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="py-6">
                    <Pagination>
                        <PaginationContent>
                            {/* Previous Button */}
                            <PaginationItem>
                                <PaginationPrevious
                                    href={links[0]?.url || "#"}
                                    className={!links[0]?.url ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>

                            {/* Page Numbers */}
                            {links.slice(1, -1).map((link, i) => (
                                <PaginationItem key={i}>
                                    <PaginationLink
                                        href={link.url}
                                        isActive={link.active}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                </PaginationItem>
                            ))}

                            {/* Next Button */}
                            <PaginationItem>
                                <PaginationNext
                                    href={links[links.length - 1]?.url || "#"}
                                    className={!links[links.length - 1]?.url ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                    <div className="text-center text-xs text-muted-foreground mt-3">
                        Showing page {current_page} of {last_page}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
