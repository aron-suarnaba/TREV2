"use client"
import AppLayout from "@/layouts/app-layout";
import { Head, router } from "@inertiajs/react";
import { ArrowLeft, BadgeCheck, Calculator, Clock, FileText, Hash, Pencil, Plus, Store, Tag, Trash2 } from 'lucide-react';
import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { items, transactions } from '@/routes';
import itemsRoutes from '@/routes/items';

const breadcrumbs = [
    { title: 'Items', href: items().url },
];

export default function Items({ items: itemsPagination }) {
    const { data = [], links = [], current_page = 1, last_page = 1 } = itemsPagination ?? {};
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false);
    const [editForm, setEditForm] = React.useState({});
    const [isCreateOpen, setIsCreateOpen] = React.useState(false);
    const [createForm, setCreateForm] = React.useState({
        site: '',
        tre_num: '',
        line_no: '',
        item_type: '',
        transaction_date: '',
        invoice_no: '',
        tin: '',
        vendor_code: '',
        vendor_name: '',
        address_line1: '',
        address_line2: '',
        address_line3: '',
        with_vat: false,
        receipt_total: '',
        vatable_sales: '',
        invoice_total: '',
        non_vat_sales: '',
        exempt_sales: '',
        vat_amount: '',
        del_charge: '',
        scpwd_basis: '',
        scpwd_disc: '',
        account_code: '',
        acctu3: '',
        acctu4: '',
        is_for_approval: false,
    });

    const openDetails = (item) => {
        setSelectedItem(item);
        setEditForm({
            site: item.site ?? '',
            tre_num: item.treNum ?? '',
            line_no: item.lineNo ?? '',
            item_type: item.itemTypeRaw ?? '',
            transaction_date: item.transactionDate ?? '',
            invoice_no: item.invoiceNo ?? '',
            tin: item.tin ?? '',
            vendor_code: item.vendorCode ?? '',
            vendor_name: item.vendorName ?? '',
            address_line1: item.addressLine1 ?? '',
            address_line2: item.addressLine2 ?? '',
            address_line3: item.addressLine3 ?? '',
            with_vat: Boolean(item.withVat),
            receipt_total: item.receiptTotal ?? '',
            vatable_sales: item.vatableSales ?? '',
            invoice_total: item.invoiceTotal ?? '',
            non_vat_sales: item.nonVatSales ?? '',
            exempt_sales: item.exemptSales ?? '',
            vat_amount: item.vatAmount ?? '',
            del_charge: item.delCharge ?? '',
            scpwd_basis: item.scpwdBasis ?? '',
            scpwd_disc: item.scpwdDisc ?? '',
            account_code: item.accountCode ?? '',
            acctu3: item.acctu3 ?? '',
            acctu4: item.acctu4 ?? '',
            is_for_approval: Boolean(item.isForApproval),
        });
        setIsEditing(false);
        setIsDialogOpen(true);
    };

    const handleDelete = (itemId, invoiceNo) => {
        if (!window.confirm(`Delete item ${invoiceNo}?`)) {
            return;
        }

        router.delete(itemsRoutes.destroy(itemId).url, {
            preserveScroll: true,
            onSuccess: () => setIsDialogOpen(false),
        });
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();

        if (!selectedItem) {
            return;
        }

        router.put(
            itemsRoutes.update(selectedItem.id).url,
            {
                site: editForm.site,
                tre_num: editForm.tre_num,
                line_no: editForm.line_no,
                item_type: editForm.item_type,
                transaction_date: editForm.transaction_date,
                invoice_no: editForm.invoice_no,
                tin: editForm.tin,
                vendor_code: editForm.vendor_code,
                vendor_name: editForm.vendor_name,
                address_line1: editForm.address_line1,
                address_line2: editForm.address_line2,
                address_line3: editForm.address_line3,
                with_vat: Boolean(editForm.with_vat),
                receipt_total: editForm.receipt_total,
                vatable_sales: editForm.vatable_sales,
                invoice_total: editForm.invoice_total,
                non_vat_sales: editForm.non_vat_sales,
                exempt_sales: editForm.exempt_sales,
                vat_amount: editForm.vat_amount,
                del_charge: editForm.del_charge,
                scpwd_basis: editForm.scpwd_basis,
                scpwd_disc: editForm.scpwd_disc,
                account_code: editForm.account_code,
                acctu3: editForm.acctu3,
                acctu4: editForm.acctu4,
                is_for_approval: Boolean(editForm.is_for_approval),
            },
            {
                preserveScroll: true,
                onSuccess: () => setIsEditing(false),
            },
        );
    };

    const handleCreateSubmit = (event) => {
        event.preventDefault();

        router.post(
            itemsRoutes.store().url,
            {
                site: createForm.site,
                tre_num: createForm.tre_num,
                line_no: createForm.line_no,
                item_type: createForm.item_type,
                transaction_date: createForm.transaction_date,
                invoice_no: createForm.invoice_no,
                tin: createForm.tin,
                vendor_code: createForm.vendor_code,
                vendor_name: createForm.vendor_name,
                address_line1: createForm.address_line1,
                address_line2: createForm.address_line2,
                address_line3: createForm.address_line3,
                with_vat: Boolean(createForm.with_vat),
                receipt_total: createForm.receipt_total,
                vatable_sales: createForm.vatable_sales,
                invoice_total: createForm.invoice_total,
                non_vat_sales: createForm.non_vat_sales,
                exempt_sales: createForm.exempt_sales,
                vat_amount: createForm.vat_amount,
                del_charge: createForm.del_charge,
                scpwd_basis: createForm.scpwd_basis,
                scpwd_disc: createForm.scpwd_disc,
                account_code: createForm.account_code,
                acctu3: createForm.acctu3,
                acctu4: createForm.acctu4,
                is_for_approval: Boolean(createForm.is_for_approval),
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setIsCreateOpen(false);
                    setCreateForm({
                        site: '',
                        tre_num: '',
                        line_no: '',
                        item_type: '',
                        transaction_date: '',
                        invoice_no: '',
                        tin: '',
                        vendor_code: '',
                        vendor_name: '',
                        address_line1: '',
                        address_line2: '',
                        address_line3: '',
                        with_vat: false,
                        receipt_total: '',
                        vatable_sales: '',
                        invoice_total: '',
                        non_vat_sales: '',
                        exempt_sales: '',
                        vat_amount: '',
                        del_charge: '',
                        scpwd_basis: '',
                        scpwd_disc: '',
                        account_code: '',
                        acctu3: '',
                        acctu4: '',
                        is_for_approval: false,
                    });
                },
            },
        );
    };

    const lockedFields = new Set([
        'vendor_code',
        'vendor_name',
        'vatable_sales',
        'non_vat_sales',
        'account_code',
        'vat_amount',
    ]);

    const isFieldLocked = (field) => !isEditing || lockedFields.has(field);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Items" />

            <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex justify-between items-center mb-5 gap-8">
                    <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm" onClick={() => router.visit(transactions().url)}>
                            <ArrowLeft className="mr-2 size-4" />
                            Back
                        </Button>
                        <h2 className="text-2xl font-semibold tracking-tight">Items</h2>
                    </div>
                    <Button size="sm" className="gap-2" onClick={() => setIsCreateOpen(true)}>
                        <Plus className="size-4" />
                        Add Item
                    </Button>
                </div>

                <div className="mb-5 rounded-md">
                    <Table>
                        <TableCaption>A list of your recent items.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Line</TableHead>
                                <TableHead>Approved</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Invoice/OR No.</TableHead>
                                <TableHead>Vendor Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>W/VAT</TableHead>
                                <TableHead>VAT/Tin No.</TableHead>
                                <TableHead>Vatable Sales</TableHead>
                                <TableHead>VAT</TableHead>
                                <TableHead>Receipt Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow
                                    key={item.id}
                                    className="cursor-pointer hover:bg-muted/50"
                                    onClick={() => openDetails(item)}
                                >
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>
                                        {item.isForApproval ? (
                                            <BadgeCheck className="size-4 text-emerald-600" />
                                        ) : (
                                            <Clock className="size-4 text-muted-foreground" />
                                        )}
                                    </TableCell>
                                    <TableCell>{item.transactionDate}</TableCell>
                                    <TableCell>{item.invoiceNo}</TableCell>
                                    <TableCell className="font-medium">{item.vendorName}</TableCell>
                                    <TableCell>{item.itemType}</TableCell>
                                    <TableCell>{item.withVat ? 'Yes' : 'No'}</TableCell>
                                    <TableCell>{item.tin}</TableCell>
                                    <TableCell>{item.vatableSales}</TableCell>
                                    <TableCell>{item.vatAmount}</TableCell>
                                    <TableCell>{item.receiptTotal}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="py-6">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={links[0]?.url || "#"}
                                    className={!links[0]?.url ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>

                            {links.slice(1, -1).map((link, i) => (
                                <PaginationItem key={i}>
                                    <PaginationLink
                                        href={link.url}
                                        isActive={link.active}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                </PaginationItem>
                            ))}

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
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader className="border-b pb-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <DialogTitle className="text-xl">Item Details</DialogTitle>
                                <DialogDescription>
                                    Review and manage transaction information.
                                </DialogDescription>
                            </div>
                            {editForm.is_for_approval && (
                                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1">
                                    <BadgeCheck className="size-3" /> Approved
                                </Badge>
                            )}
                        </div>
                    </DialogHeader>

                    {!selectedItem ? null : (
                        <form onSubmit={handleEditSubmit} className="space-y-8 py-4">
                            {/* SECTION 1: CORE INFO */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                    <FileText className="size-4" /> Basic Information
                                </h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-date">Transaction Date</Label>
                                        <Input
                                            id="detail-date"
                                            type="date"
                                            value={editForm.transaction_date ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, transaction_date: event.target.value }))}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-invoice-no">Invoice/OR No.</Label>
                                        <Input
                                            id="detail-invoice-no"
                                            value={editForm.invoice_no ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, invoice_no: event.target.value }))}
                                            disabled={!isEditing}
                                            className="font-mono"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-tin">VAT/TIN No.</Label>
                                        <Input
                                            id="detail-tin"
                                            value={editForm.tin ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, tin: event.target.value }))}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            {/* SECTION 2: VENDOR & ADDRESS */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                    <Store className="size-4" /> Vendor Details
                                </h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-vendor-code">Vendor Code</Label>
                                        <Input
                                            id="detail-vendor-code"
                                            value={editForm.vendor_code ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, vendor_code: event.target.value }))}
                                            disabled={isFieldLocked('vendor_code')}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-vendor-name">Vendor Name</Label>
                                        <Input
                                            id="detail-vendor-name"
                                            value={editForm.vendor_name ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, vendor_name: event.target.value }))}
                                            disabled={isFieldLocked('vendor_name')}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-address-1">Address Line 1</Label>
                                        <Input
                                            id="detail-address-1"
                                            value={editForm.address_line1 ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, address_line1: event.target.value }))}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-address-2">Address Line 2</Label>
                                        <Input
                                            id="detail-address-2"
                                            value={editForm.address_line2 ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, address_line2: event.target.value }))}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-address-3">Address Line 3</Label>
                                        <Input
                                            id="detail-address-3"
                                            value={editForm.address_line3 ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, address_line3: event.target.value }))}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            {/* SECTION 3: FINANCIALS */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Calculator className="size-4" /> Financial Breakdown
                                    </h4>
                                    <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full border">
                                        {editForm.with_vat ? (
                                            <BadgeCheck className="size-4 text-emerald-600" />
                                        ) : (
                                            <Clock className="size-4 text-muted-foreground" />
                                        )}
                                        <span className="text-xs">Taxable Transaction</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 bg-muted/20 p-4 rounded-lg border border-dashed">
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-receipt-total" className="text-blue-700">Receipt Total</Label>
                                        <Input
                                            id="detail-receipt-total"
                                            type="number"
                                            step="0.01"
                                            className="border-blue-200 focus-visible:ring-blue-500"
                                            value={editForm.receipt_total ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, receipt_total: event.target.value }))}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-del-charge">Delivery Charge</Label>
                                        <Input
                                            id="detail-del-charge"
                                            type="number"
                                            step="0.01"
                                            value={editForm.del_charge ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, del_charge: event.target.value }))}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-invoice-total font-semibold">Net Invoice Total</Label>
                                        <Input
                                            id="detail-invoice-total"
                                            type="number"
                                            step="0.01"
                                            className="bg-background font-bold"
                                            value={editForm.invoice_total ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, invoice_total: event.target.value }))}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-vatable-sales">Vatable Sales</Label>
                                        <Input
                                            id="detail-vatable-sales"
                                            type="number"
                                            step="0.01"
                                            value={editForm.vatable_sales ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, vatable_sales: event.target.value }))}
                                            disabled={isFieldLocked('vatable_sales')}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-non-vat-sales">Non-VAT Sales</Label>
                                        <Input
                                            id="detail-non-vat-sales"
                                            type="number"
                                            step="0.01"
                                            value={editForm.non_vat_sales ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, non_vat_sales: event.target.value }))}
                                            disabled={isFieldLocked('non_vat_sales')}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="detail-vat-amount">VAT Amount</Label>
                                        <Input
                                            id="detail-vat-amount"
                                            type="number"
                                            step="0.01"
                                            value={editForm.vat_amount ?? ''}
                                            onChange={(event) => setEditForm((prev) => ({ ...prev, vat_amount: event.target.value }))}
                                            disabled={isFieldLocked('vat_amount')}
                                        />
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            {/* SECTION 4: ACCOUNTING & DISCOUNTS */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Hash className="size-4" /> Accounting
                                    </h4>
                                    <div className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="detail-account-code">Account Code</Label>
                                            <Input
                                                id="detail-account-code"
                                                value={editForm.account_code ?? ''}
                                                onChange={(event) => setEditForm((prev) => ({ ...prev, account_code: event.target.value }))}
                                                disabled={isFieldLocked('account_code')}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="grid gap-2">
                                                <Label htmlFor="detail-acctu3">UC3</Label>
                                                <Input id="detail-acctu3" value={editForm.acctu3 ?? ''} disabled={!isEditing} />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="detail-acctu4">UC4</Label>
                                                <Input id="detail-acctu4" value={editForm.acctu4 ?? ''} disabled={!isEditing} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Tag className="size-4" /> Discounts / Others
                                    </h4>
                                    <div className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="detail-exempt-sales">VAT Exempt Sales</Label>
                                            <Input id="detail-exempt-sales" type="number" value={editForm.exempt_sales ?? ''} disabled={!isEditing} />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="grid gap-2">
                                                <Label htmlFor="detail-scpwd-basis">SC/PWD Basis</Label>
                                                <Input id="detail-scpwd-basis" type="number" value={editForm.scpwd_basis ?? ''} disabled={!isEditing} />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="detail-scpwd-disc">SC/PWD Discount</Label>
                                                <Input id="detail-scpwd-disc" type="number" value={editForm.scpwd_disc ?? ''} disabled={!isEditing} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <DialogFooter className="border-t pt-6 gap-2 sm:gap-0">
                                <div className="flex flex-1 gap-2">
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="icon"
                                        onClick={() => handleDelete(selectedItem.id, selectedItem.invoiceNo)}
                                        title="Delete Item"
                                    >
                                        <Trash2 className="size-4" />
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setIsEditing((prev) => !prev)}
                                    >
                                        {isEditing ? 'Cancel' : <><Pencil className="mr-2 size-4" /> Edit Details</>}
                                    </Button>
                                </div>
                                <Button type="submit" disabled={!isEditing} className="min-w-[120px]">
                                    Save Changes
                                </Button>
                            </DialogFooter>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                <DialogContent className="max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>Add Item</DialogTitle>
                        <DialogDescription>
                            Enter the full item details to create a new record.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleCreateSubmit} className="space-y-6">
                        <div className="grid gap-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-site">Site</Label>
                                    <Input
                                        id="create-site"
                                        value={createForm.site}
                                        onChange={(event) => setCreateForm((prev) => ({ ...prev, site: event.target.value }))}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-tre-num">TRE Number</Label>
                                    <Input
                                        id="create-tre-num"
                                        value={createForm.tre_num}
                                        onChange={(event) => setCreateForm((prev) => ({ ...prev, tre_num: event.target.value }))}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-line-no">Line No.</Label>
                                    <Input
                                        id="create-line-no"
                                        value={createForm.line_no}
                                        onChange={(event) => setCreateForm((prev) => ({ ...prev, line_no: event.target.value }))}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-item-type">Item Type</Label>
                                    <Input
                                        id="create-item-type"
                                        value={createForm.item_type}
                                        onChange={(event) => setCreateForm((prev) => ({ ...prev, item_type: event.target.value }))}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-date">Transaction Date</Label>
                                    <Input
                                        id="create-date"
                                        type="date"
                                        value={createForm.transaction_date}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, transaction_date: event.target.value }))
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-invoice-no">Invoice/OR No.</Label>
                                    <Input
                                        id="create-invoice-no"
                                        value={createForm.invoice_no}
                                        onChange={(event) => setCreateForm((prev) => ({ ...prev, invoice_no: event.target.value }))}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-tin">VAT/TIN No.</Label>
                                    <Input
                                        id="create-tin"
                                        value={createForm.tin}
                                        onChange={(event) => setCreateForm((prev) => ({ ...prev, tin: event.target.value }))}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-vendor-code">Vendor Code</Label>
                                    <Input
                                        id="create-vendor-code"
                                        value={createForm.vendor_code}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, vendor_code: event.target.value }))
                                        }
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-vendor-name">Vendor Name</Label>
                                    <Input
                                        id="create-vendor-name"
                                        value={createForm.vendor_name}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, vendor_name: event.target.value }))
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-address-1">Address Line 1</Label>
                                    <Input
                                        id="create-address-1"
                                        value={createForm.address_line1}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, address_line1: event.target.value }))
                                        }
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-address-2">Address Line 2</Label>
                                    <Input
                                        id="create-address-2"
                                        value={createForm.address_line2}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, address_line2: event.target.value }))
                                        }
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-address-3">Address Line 3</Label>
                                    <Input
                                        id="create-address-3"
                                        value={createForm.address_line3}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, address_line3: event.target.value }))
                                        }
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div className="flex items-center gap-3 rounded-md border p-3">
                                    {createForm.with_vat ? (
                                        <BadgeCheck className="size-4 text-emerald-600" />
                                    ) : (
                                        <Clock className="size-4 text-muted-foreground" />
                                    )}
                                    <Label>With VAT</Label>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-receipt-total">Receipt Total</Label>
                                    <Input
                                        id="create-receipt-total"
                                        type="number"
                                        step="0.01"
                                        value={createForm.receipt_total}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, receipt_total: event.target.value }))
                                        }
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-invoice-total">Invoice Total (With Delivery Charge)</Label>
                                    <Input
                                        id="create-invoice-total"
                                        type="number"
                                        step="0.01"
                                        value={createForm.invoice_total}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, invoice_total: event.target.value }))
                                        }
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-del-charge">Delivery Charge</Label>
                                    <Input
                                        id="create-del-charge"
                                        type="number"
                                        step="0.01"
                                        value={createForm.del_charge}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, del_charge: event.target.value }))
                                        }
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-vatable-sales">Vatable Sales</Label>
                                    <Input
                                        id="create-vatable-sales"
                                        type="number"
                                        step="0.01"
                                        value={createForm.vatable_sales}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, vatable_sales: event.target.value }))
                                        }
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-non-vat-sales">Non-VAT Sales</Label>
                                    <Input
                                        id="create-non-vat-sales"
                                        type="number"
                                        step="0.01"
                                        value={createForm.non_vat_sales}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, non_vat_sales: event.target.value }))
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-exempt-sales">Other VAT Exempt Sales</Label>
                                    <Input
                                        id="create-exempt-sales"
                                        type="number"
                                        step="0.01"
                                        value={createForm.exempt_sales}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, exempt_sales: event.target.value }))
                                        }
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-vat-amount">VAT Amount</Label>
                                    <Input
                                        id="create-vat-amount"
                                        type="number"
                                        step="0.01"
                                        value={createForm.vat_amount}
                                        onChange={(event) => setCreateForm((prev) => ({ ...prev, vat_amount: event.target.value }))}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-account-code">Account</Label>
                                    <Input
                                        id="create-account-code"
                                        value={createForm.account_code}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, account_code: event.target.value }))
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-acctu3">UC3</Label>
                                    <Input
                                        id="create-acctu3"
                                        value={createForm.acctu3}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, acctu3: event.target.value }))
                                        }
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-acctu4">UC4</Label>
                                    <Input
                                        id="create-acctu4"
                                        value={createForm.acctu4}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, acctu4: event.target.value }))
                                        }
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-scpwd-basis">Service Charge/PWD Basis</Label>
                                    <Input
                                        id="create-scpwd-basis"
                                        type="number"
                                        step="0.01"
                                        value={createForm.scpwd_basis}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, scpwd_basis: event.target.value }))
                                        }
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-scpwd-disc">Service Charge/PWD Discount</Label>
                                    <Input
                                        id="create-scpwd-disc"
                                        type="number"
                                        step="0.01"
                                        value={createForm.scpwd_disc}
                                        onChange={(event) =>
                                            setCreateForm((prev) => ({ ...prev, scpwd_disc: event.target.value }))
                                        }
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex items-center gap-3 rounded-md border p-3">
                                    {createForm.is_for_approval ? (
                                        <BadgeCheck className="size-4 text-emerald-600" />
                                    ) : (
                                        <Clock className="size-4 text-muted-foreground" />
                                    )}
                                    <Label>Approved</Label>
                                </div>
                            </div>

                        </div>

                        <DialogFooter className="gap-2">
                            <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit">Add Item</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}
