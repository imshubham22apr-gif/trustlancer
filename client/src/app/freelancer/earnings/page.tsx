'use client';

import Card from '@/components/ui/Card';

export default function EarningsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Earnings</h1>

      <div className="grid md:grid-cols-3 gap-6">
         <Card padding="md">
             <p className="text-sm text-gray-500 mb-1">Available to Withdraw</p>
             <p className="text-3xl font-bold text-green-600">$1,250.00</p>
             <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700">Withdraw Funds</button>
         </Card>
         <Card padding="md">
             <p className="text-sm text-gray-500 mb-1">Pending Clearance</p>
             <p className="text-3xl font-bold">$4,000.00</p>
         </Card>
         <Card padding="md">
             <p className="text-sm text-gray-500 mb-1">Lifetime Earnings</p>
             <p className="text-3xl font-bold">$15,450.00</p>
         </Card>
      </div>

      <Card padding="lg">
          <h3 className="font-bold mb-4">Payout History</h3>
          <div className="text-center text-gray-500 py-8">
              No recent payouts configured.
          </div>
      </Card>
    </div>
  );
}
