import { Head } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';

const stats = [
    {
        label: 'Open Orders',
        value: '128',
        change: '+12.4%',
        trend: 'up',
        caption: 'Since last week',
    },
    {
        label: 'Revenue',
        value: '₱428,900',
        change: '+8.1%',
        trend: 'up',
        caption: 'Last 30 days',
    },
    {
        label: 'Avg. Turnaround',
        value: '2.1 days',
        change: '-0.4 days',
        trend: 'down',
        caption: 'Shop floor',
    },
    {
        label: 'On-Time Delivery',
        value: '96.7%',
        change: '+1.9%',
        trend: 'up',
        caption: 'Last 90 days',
    },
];

const recentOrders = [
    {
        id: 'PW-1041',
        client: 'Summit Labs',
        product: 'Product labels',
        status: 'In production',
        statusVariant: 'secondary',
        eta: 'Mar 07',
    },
    {
        id: 'PW-1040',
        client: 'Raven & Co.',
        product: 'Packaging sleeves',
        status: 'Proofing',
        statusVariant: 'outline',
        eta: 'Mar 06',
    },
    {
        id: 'PW-1039',
        client: 'Blue Lotus',
        product: 'Marketing flyers',
        status: 'Ready',
        statusVariant: 'default',
        eta: 'Mar 05',
    },
    {
        id: 'PW-1038',
        client: 'Orchid Health',
        product: 'Box inserts',
        status: 'Delayed',
        statusVariant: 'destructive',
        eta: 'Mar 08',
    },
];

const activity = [
    {
        name: 'Mara S.',
        action: 'approved',
        target: 'PW-1040 proofs',
        time: '12m ago',
    },
    {
        name: 'Darryl K.',
        action: 'flagged',
        target: 'lamination issue on PW-1038',
        time: '42m ago',
    },
    {
        name: 'Jules P.',
        action: 'scheduled',
        target: 'dispatch for PW-1036',
        time: '2h ago',
    },
];

const breadcrumbs = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex flex-col gap-6">
                <section className="flex flex-col gap-4 rounded-2xl border bg-card/60 p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-2">
                            <Badge variant="secondary">Operations</Badge>
                            <h1 className="text-3xl font-semibold tracking-tight">
                                {import.meta.env.VITE_APP_NAME} Dashboard
                            </h1>
                            <p className="max-w-2xl text-sm text-muted-foreground">
                                Keep an eye on active orders, shop floor flow,
                                and delivery readiness from one place.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <Button variant="outline">View queue</Button>
                            <Button>New order</Button>
                        </div>
                    </div>
                    <Separator />
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {stats.map((stat) => (
                            <Card key={stat.label} className="shadow-none">
                                <CardHeader className="gap-1">
                                    <CardDescription>
                                        {stat.label}
                                    </CardDescription>
                                    <CardTitle className="text-2xl">
                                        {stat.value}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
                                    <span>{stat.caption}</span>
                                    <span
                                        className={
                                            stat.trend === 'down'
                                                ? 'text-emerald-600'
                                                : 'text-sky-600'
                                        }
                                    >
                                        {stat.change}
                                    </span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent orders</CardTitle>
                            <CardDescription>
                                Track jobs currently inside production.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                {recentOrders.map((order) => (
                                    <div
                                        key={order.id}
                                        className="flex flex-wrap items-center justify-between gap-4 rounded-xl border px-4 py-3"
                                    >
                                        <div className="min-w-[220px]">
                                            <p className="text-sm font-semibold">
                                                {order.client}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {order.id} · {order.product}
                                            </p>
                                        </div>
                                        <Badge variant={order.statusVariant}>
                                            {order.status}
                                        </Badge>
                                        <div className="text-sm text-muted-foreground">
                                            ETA {order.eta}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Team activity</CardTitle>
                                <CardDescription>
                                    Latest actions from your ops team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {activity.map((item) => (
                                    <div
                                        key={`${item.name}-${item.time}`}
                                        className="flex items-start gap-3"
                                    >
                                        <Avatar className="h-9 w-9">
                                            <AvatarFallback>
                                                {item.name
                                                    .split(' ')
                                                    .map((word) => word[0])
                                                    .join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                            <p className="text-sm">
                                                <span className="font-semibold">
                                                    {item.name}
                                                </span>{' '}
                                                {item.action}{' '}
                                                <span className="font-medium">
                                                    {item.target}
                                                </span>
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {item.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Quick actions</CardTitle>
                                <CardDescription>
                                    Jump straight into daily workflows.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-3">
                                <Button
                                    variant="outline"
                                    className="justify-start"
                                >
                                    Create a proof request
                                </Button>
                                <Button
                                    variant="outline"
                                    className="justify-start"
                                >
                                    Schedule a delivery run
                                </Button>
                                <Button
                                    variant="outline"
                                    className="justify-start"
                                >
                                    Update stock levels
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
