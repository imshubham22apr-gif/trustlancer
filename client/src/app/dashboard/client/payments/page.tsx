'use client';

import Card from '@/components/ui/Card';
import { ArrowDownLeftIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function PaymentsPage() {
  const transactions: any[] = [];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payments</h1>

      <div className="grid md:grid-cols-3 gap-6">
          <Card padding="md">
              <p className="text-sm text-gray-500 mb-1">Total Spent</p>
              <p className="text-2xl font-bold">$0.00</p>
          </Card>
          <Card padding="md">
              <p className="text-sm text-gray-500 mb-1">Pending Release</p>
              <p className="text-2xl font-bold">$0.00</p>
          </Card>
          <Card padding="md">
              <p className="text-sm text-gray-500 mb-1">Wallet Balance</p>
              <p className="text-2xl font-bold">$0.00</p>
          </Card>
      </div>

      <Card padding="none" className="overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-slate-800">
              <h3 className="font-bold">Transaction History</h3>
          </div>
          <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 dark:bg-slate-800/50 text-gray-500">
                  <tr>
                      <th className="px-6 py-3 font-medium">Type</th>
                      <th className="px-6 py-3 font-medium">Recipient/Sender</th>
                      <th className="px-6 py-3 font-medium">Date</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                      <th className="px-6 py-3 font-medium text-right">Amount</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                  {transactions.length === 0 && (
                     <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                           No transactions found
                        </td>
                     </tr>
                  )}
                  {transactions.map((tx) => (
                      <tr key={tx.id}>
                          <td className="px-6 py-4 flex items-center gap-2">
                              {tx.type === 'Deposit' ? (
                                  <div className="p-1 rounded bg-green-100 text-green-600"><ArrowDownLeftIcon className="w-4 h-4" /></div>
                              ) : (
                                  <div className="p-1 rounded bg-red-100 text-red-600"><ArrowUpRightIcon className="w-4 h-4" /></div>
                              )}
                              {tx.type}
                          </td>
                          <td className="px-6 py-4">{tx.recipient}</td>
                          <td className="px-6 py-4 text-gray-500">{tx.date}</td>
                          <td className="px-6 py-4">
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                  {tx.status}
                              </span>
                          </td>
                          <td className={`px-6 py-4 text-right font-medium ${tx.type === 'Deposit' ? 'text-green-600' : 'text-gray-900 dark:text-white'}`}>
                              {tx.amount}
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </Card>
    </div>
  );
}
