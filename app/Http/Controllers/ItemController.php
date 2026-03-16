<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemRequest;
use App\Models\Item;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ItemController extends Controller
{
    public function index(): Response
    {
        $items = Item::query()
            ->orderBy('id', 'desc')
            ->orderBy('created_at', 'desc')
            ->paginate(20)
            ->through(fn (Item $item) => [
                'id' => $item->id,
                'transactionDate' => $item->transaction_date?->format('Y-m-d'),
                'invoiceNo' => $item->invoice_no,
                'vendorName' => $item->vendor_name,
                'itemType' => $item->item_type,
                'withVat' => (bool) $item->with_vat,
                'tin' => $item->tin,
                'vatableSales' => $item->vatable_sales,
                'invoiceTotal' => $item->invoice_total,
                'vatAmount' => $item->vat_amount,
                'receiptTotal' => $item->receipt_total,
                'isForApproval' => (bool) $item->is_for_approval,
                'site' => $item->site,
                'treNum' => $item->tre_num,
                'lineNo' => $item->line_no,
                'itemTypeRaw' => $item->item_type,
                'vendorCode' => $item->vendor_code,
                'addressLine1' => $item->address_line1,
                'addressLine2' => $item->address_line2,
                'addressLine3' => $item->address_line3,
                'nonVatSales' => $item->non_vat_sales,
                'accountCode' => $item->account_code,
                'acctu3' => $item->acctu3,
                'acctu4' => $item->acctu4,
                'vatClass' => $item->vat_class,
                'remarks' => $item->remarks,
                'delCharge' => $item->del_charge,
                'scpwdBasis' => $item->scpwd_basis,
                'scpwdDisc' => $item->scpwd_disc,
                'exemptSales' => $item->exempt_sales,
            ]);

        return Inertia::render('Items', [
            'items' => $items,
        ]);
    }

    public function store(ItemRequest $request): RedirectResponse
    {
        Item::create($request->validated());

        return to_route('items');
    }

    public function update(ItemRequest $request, Item $item): RedirectResponse
    {
        $item->update($request->validated());

        return to_route('items');
    }

    public function destroy(Item $item): RedirectResponse
    {
        $item->delete();

        return to_route('items');
    }
}
