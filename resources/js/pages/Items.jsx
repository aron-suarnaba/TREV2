import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { Plus } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const breadcrumbs = [
    {
        title: 'Transactions',
        // href: dashboard().url,
    },
    {
        title: 'Items',
        // href: dashboard().url,
    },
];

export default function Items() {
    const today = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    return (
        <AppLayout>
            <Head breadcrumbs={breadcrumbs} />

            <div className="p-4 sm:p-6 lg:p-8">

                <div className="flex justify-between items-center mb-5 gap-8">
                    <h2 className="text-2xl font-semibold tracking-tight">Items</h2>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="sm" className="gap-2">
                                <Plus className="size-4" />
                                Add Item
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
                            <DialogHeader>
                                <DialogTitle>Add Item</DialogTitle>
                                <DialogDescription>
                                    Fill out the payment details below to generate TRE Transaction.
                                </DialogDescription>
                            </DialogHeader>

                            <form className="space-y-6 py-4">
                                <div className="grid gap-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="TINNum">VAT/TIN No.<span className="text-red-500 text-lg">*</span></Label>
                                            <Select>
                                                <SelectTrigger id="TINNum">
                                                    <SelectValue placeholder="Select TIN No." />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="010-805-447-00002">010-805-447-00002</SelectItem>
                                                    <SelectItem value="123-456-789-00000">123-456-789-00000</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="date">Date<span className="text-red-500 text-lg">*</span></Label>
                                            <Input type="date" id="date" defaultValue={today} />
                                        </div>
                                    </div>

                                    {/* Row 2: Type and Invoice */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="type">Type<span className="text-red-500 text-lg">*</span></Label>
                                            <Select>
                                                <SelectTrigger id="type" className="w-full">
                                                    <SelectValue placeholder="Select Type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="representation">Representation</SelectItem>
                                                    <SelectItem value="gasoline">Gasoline</SelectItem>
                                                    <SelectItem value="vehicleRepairsGood">Vehicle Repairs (Good)</SelectItem>
                                                    <SelectItem value="vehicleRepairsService">Vehicle Repairs (Service)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="invoiceNo">Invoice/OR No.<span className="text-red-500 text-lg">*</span></Label>
                                            <Input type="text" id="invoiceNo" placeholder="e.g. 0000503891" />
                                        </div>
                                    </div>

                                    {/* Row 3: Vendor Info (Read Only) */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="vendorNo">Vendor No.</Label>
                                            <Input type="text" id="vendorNo" placeholder="ZPCAIN6" disabled className="bg-muted" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="vendorName">Vendor Name</Label>
                                            <Input type="text" id="vendorName" placeholder="CAVALLINO, INC." disabled className="bg-muted" />
                                        </div>
                                    </div>

                                    {/* Row 4: VAT Toggle and Total */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                                        <div className="flex items-center space-x-2 rounded-md border p-3 bg-slate-50">
                                            <Checkbox id="withVAT" defaultChecked />
                                            <Label htmlFor="withVAT" className="cursor-pointer">Transaction includes VAT</Label>
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="receiptTotal">Receipt Total<span className="text-red-500 text-lg">*</span></Label>
                                            <Input type="number" id="receiptTotal" placeholder="0.00" className="font-mono" />
                                        </div>
                                    </div>

                                    {/* Row 5: Discounts */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="SCPWDDiscount" className="text-xs uppercase text-muted-foreground">SC/PWD Discount<span className="text-red-500 text-lg">*</span></Label>
                                            <Input type="number" id="SCPWDDiscount" placeholder="0.00" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="SCPWDBasis" className="text-xs uppercase text-muted-foreground">SC/PWD Basis<span className="text-red-500 text-lg">*</span></Label>
                                            <Input type="number" id="SCPWDBasis" placeholder="0.00" />
                                        </div>
                                    </div>

                                    {/* Row 6: Tax Breakdown */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="vatSales">Vatable Sales</Label>
                                            <Input type="number" id="vatSales" placeholder="0.00" disabled />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="nonVATSales">Non-VAT Sales</Label>
                                            <Input type="number" id="nonVATSales" placeholder="0.00" disabled />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="VAT">VAT Amount</Label>
                                            <Input type="number" id="VAT" placeholder="0.00" disabled />
                                        </div>
                                    </div>

                                    {/* Row 7: Account Codes */}
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="acct">Account</Label>
                                            <Input type="text" id="acct" placeholder="Code" disabled />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="uc3">UC3</Label>
                                            <Input type="text" id="uc3" placeholder="UC3" disabled />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="uc4">UC4</Label>
                                            <Input type="text" id="uc4" placeholder="UC4" disabled />
                                        </div>
                                    </div>
                                </div>

                                <DialogFooter className="gap-2">
                                    <DialogClose asChild>
                                        <Button type="button" variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">Add Item to List</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>


                </div>



                <div className="mb-5">
                    <Table>
                        <TableCaption>A list of your recent transactions.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Approved</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Invoice/OR No.</TableHead>
                                <TableHead>Vendor Name  </TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>W/VAT</TableHead>
                                <TableHead>VAT/Tin No.</TableHead>
                                <TableHead>Vatable Sales </TableHead>
                                <TableHead>Vat</TableHead>
                                <TableHead>Receipt Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* {transactions.map((transaction, index) => (
                                <TableRow
                                    key={index}
                                    className="cursor-pointer hover:bg-muted/50"
                                    onClick={() => router.visit(route('items'))}
                                >
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
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="size-8">
                                                    <MoreHorizontal className="size-4" />
                                                    <span className="sr-only">Open menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => router.visit(route('items'))}>
                                                    View Details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>For Approval</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem variant="destructive">
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </div>

            </div>

        </AppLayout>
    );
}
