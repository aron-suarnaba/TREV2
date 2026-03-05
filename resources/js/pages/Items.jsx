import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";

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
    return (
        <AppLayout>
            <Head breadcrumbs={breadcrumbs} />

            <div className="p-4 sm:p-6 lg:p-8">

                <div className="flex justify-between items-center mb-5 gap-8">

                </div>

            </div>

        </AppLayout>
    );
}
