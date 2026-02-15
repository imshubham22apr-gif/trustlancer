'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Switch from '@/components/ui/Switch';
import toast from 'react-hot-toast';

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [messageAlerts, setMessageAlerts] = useState(true);

  const handleEmailToggle = (checked: boolean) => {
    setEmailNotifications(checked);
    toast.success(`Email notifications ${checked ? 'enabled' : 'disabled'}`);
  };

  const handleMessageToggle = (checked: boolean) => {
    setMessageAlerts(checked);
    toast.success(`Message alerts ${checked ? 'enabled' : 'disabled'}`);
    if (checked) {
       toast("You will now receive alerts for new messages.", { icon: '🔔' });
    }
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>

      <Card padding="lg">
          <h2 className="text-lg font-bold mb-4">Profile Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
              <Input label="Display Name" placeholder="Your Name" fullWidth />
              <Input label="Email" placeholder="your@email.com" fullWidth />
              <div className="md:col-span-2">
                  <Input label="Bio" placeholder="Tell us about yourself" fullWidth />
              </div>
          </div>
          <div className="mt-6 flex justify-end">
              <Button>Save Changes</Button>
          </div>
      </Card>

      <Card padding="lg">
          <h2 className="text-lg font-bold mb-4">Notifications</h2>
          <div className="space-y-4">
              <div className="flex items-center justify-between">
                  <div>
                    <span className="block font-medium">Email Notifications</span>
                    <span className="text-sm text-gray-500">Receive emails about new projects and messages</span>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onChange={handleEmailToggle} 
                  />
              </div>
              <div className="flex items-center justify-between">
                  <div>
                    <span className="block font-medium">New Message Alerts</span>
                    <span className="text-sm text-gray-500">Get notified when you receive a message in dashboard</span>
                  </div>
                  <Switch 
                    checked={messageAlerts} 
                    onChange={handleMessageToggle} 
                  />
              </div>
          </div>
      </Card>
    </div>
  );
}
