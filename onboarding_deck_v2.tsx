import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OnboardingDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slides = [
    {
      title: "Onboarding today is fragile and stressful — it doesn’t need to be",
      subtitle: "The Problem",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-2 border-blue-500 p-4 rounded-lg shadow">
            <div className="font-bold text-blue-900">One-sentence proposal</div>
            <div className="text-sm text-slate-800">
              “We turn onboarding from a last-minute scramble into a predictable weekly process where every new hire is ready to work on Monday.”
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-red-400 bg-red-50 p-5 rounded-lg">
              <h3 className="font-bold text-red-900 mb-3 text-lg">Current reality</h3>
              <ul className="space-y-2 text-sm text-slate-800">
                <li>• Recruiters send emails at different times</li>
                <li>• IT manually creates accounts and chases missing info</li>
                <li>• Things get missed, especially on Fridays</li>
                <li>• New hires start without access</li>
                <li>• Time zones make everything harder</li>
                <li>• Security gets weaker when things are rushed</li>
              </ul>
            </div>
            <div className="border-2 border-green-500 bg-green-50 p-5 rounded-lg">
              <h3 className="font-bold text-green-900 mb-3 text-lg">What we want instead</h3>
              <ul className="space-y-2 text-sm text-slate-800">
                <li>• One clear weekly deadline</li>
                <li>• One source of truth for new hires</li>
                <li>• Devices and accounts ready before Day 1</li>
                <li>• Access based on role, not manual guesswork</li>
                <li>• Problems caught on Friday, not Monday</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-600 p-4 rounded-lg text-center font-bold text-white text-lg shadow-md">
            Bottom line: We should not rely on heroics to get people working — we should rely on a system.
          </div>
        </div>
      )
    },
    {
      title: "Weekly Operating Model",
      subtitle: "How this works in practice",
      content: (
        <div className="space-y-5">
          <div className="bg-slate-100 border border-slate-200 p-4 rounded-lg">
            <div className="font-bold text-slate-900">“Everyone knows what happens each week and when.”</div>
          </div>

          <div className="space-y-3 text-sm text-slate-800">
            <div>
              <div className="font-semibold text-slate-900">Wednesday (Recruiters)</div>
              <div>Recruiters submit new hires using a simple form. The form won’t submit unless all required fields are filled in, so IT isn’t chasing missing data later.</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Thursday morning (IT)</div>
              <div>IT reviews the list, checks for duplicates or mistakes, and uploads it into Okta. This is the moment where IT says: “Yes — these are the people starting on Monday.”</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Thursday afternoon (Systems)</div>
              <div>Okta creates the accounts. Jamf and Intune prepare the devices. Apps are assigned automatically based on role.</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Friday (Verification)</div>
              <div className="space-y-1">
                <div>IT checks:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Can users log in?</li>
                  <li>Did MFA enrol?</li>
                  <li>Did devices enrol correctly?</li>
                </ul>
                <div>If anything is broken, it gets fixed before Monday.</div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Monday (Day 1)</div>
              <div>IT monitors logins and device enrolment and helps anyone who didn’t get in.</div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg text-sm text-slate-800">
            Late hires still happen — but they go through a fast-lane with manager approval so IT isn’t constantly firefighting.
          </div>
        </div>
      )
    },
    {
      title: "How We Design the System",
      subtitle: "These are not buzzwords — this is how IT avoids chaos.",
      content: (
        <div className="space-y-3 text-sm text-slate-800">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
            <div className="font-semibold text-slate-900">Identity is the control point</div>
            <div>If Okta is right, everything else follows. If Okta is wrong, everything breaks.</div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
            <div className="font-semibold text-slate-900">Automate the boring stuff</div>
            <div>Creating accounts, assigning apps, pushing device profiles — that should happen without IT clicking buttons.</div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
            <div className="font-semibold text-slate-900">Use roles, not individuals</div>
            <div>People get access because they are “Finance” or “Kitchen Ops,” not because someone remembered what to tick.</div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
            <div className="font-semibold text-slate-900">Catch problems early</div>
            <div>Friday is when we find issues — not Monday when someone is waiting to work.</div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
            <div className="font-semibold text-slate-900">Humans approve risky things</div>
            <div>Finance systems, production access, admin tools — these need a human sign-off.</div>
          </div>
        </div>
      )
    },
    {
      title: "Where Everything Connects",
      subtitle: "This is how the moving parts fit together.",
      content: (
        <div className="space-y-4 text-sm text-slate-800">
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm space-y-2">
            <div>Recruiter / HR gives us the hiring data.</div>
            <div>Okta is where identity lives.</div>
            <div>Jamf and Intune make sure devices are secure.</div>
            <div>Google, Slack, POS, Finance tools get access from Okta.</div>
          </div>

          <div className="bg-slate-100 border border-slate-200 p-4 rounded-lg space-y-2">
            <div className="font-bold text-slate-900">What matters:</div>
            <ul className="list-disc list-inside space-y-1">
              <li>Apps are never assigned directly to users</li>
              <li>Devices must be compliant before they get access</li>
              <li>MFA is required for everyone</li>
              <li>If someone leaves, disabling them in Okta shuts off everything.</li>
            </ul>
            <div className="text-slate-800">That’s how we stay secure without chasing systems one by one.</div>
          </div>
        </div>
      )
    },
    {
      title: "How Recruiters Talk to IT",
      subtitle: "From ad-hoc to one clean form",
      content: (
        <div className="space-y-4 text-sm text-slate-800">
          <div className="bg-red-50 border border-red-300 p-4 rounded-lg">
            <div className="font-bold text-slate-900 mb-1">Right now</div>
            <div>Emails, spreadsheets, Slack messages. That doesn’t scale.</div>
          </div>

          <div className="bg-blue-50 border border-blue-300 p-4 rounded-lg">
            <div className="font-bold text-slate-900 mb-2">Instead, recruiters use one form.</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="font-semibold text-slate-900 mb-1">They enter:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Name</li>
                  <li>Personal email (for activation)</li>
                  <li>Start date</li>
                  <li>Team</li>
                  <li>Role</li>
                  <li>Location</li>
                  <li>Device type</li>
                  <li>Manager</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-1">The form:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Won’t submit if something is missing</li>
                  <li>Won’t allow a start date that isn’t a Monday</li>
                  <li>Catches duplicates</li>
                  <li>Sends a confirmation back to the recruiter</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-300 p-4 rounded-lg">
            <div>IT gets one clean list every week — not ten different emails.</div>
            <div>That becomes the file we import into Okta.</div>
          </div>
        </div>
      )
    },
    {
      title: "Identity & Access Creation",
      subtitle: "RBAC Groups + Approval Gates",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 border-2 border-purple-400 p-5 rounded-lg shadow">
            <div className="font-bold mb-3 text-slate-900 text-base">Pre-defined role bundles (IT + HR owned)</div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="bg-white p-4 rounded-lg border-2 border-purple-300 shadow-sm">
                <div className="font-bold text-purple-900 mb-2">ENG-Standard</div>
                <ul className="mt-2 text-xs space-y-1 text-slate-700">
                  <li>• e.g., GitHub or equivalent repo</li>
                  <li>• Jira (or existing tracker)</li>
                  <li>• Slack (or team chat)</li>
                  <li>• Google Workspace (or primary productivity suite)</li>
                  <li>• Cloud read-only (e.g., AWS)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-green-300 shadow-sm">
                <div className="font-bold text-green-900 mb-2">OPS-Kitchen</div>
                <ul className="mt-2 text-xs space-y-1 text-slate-700">
                  <li>• POS (e.g., Toast) or existing system</li>
                  <li>• Inventory system (current tool)</li>
                  <li>• Slack (limited) or equivalent</li>
                  <li>• Google Workspace (or primary suite)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-red-300 shadow-sm">
                <div className="font-bold text-red-900 mb-2">FIN-Restricted</div>
                <ul className="mt-2 text-xs space-y-1 text-slate-700">
                  <li>• ERP (e.g., NetSuite)</li>
                  <li>• Banking/financial portal</li>
                  <li>• Slack (or comms)</li>
                  <li>• Google Workspace (or primary suite)</li>
                  <li>⚠️ Requires approval</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border-2 border-red-400 p-4 rounded-lg shadow">
            <div className="font-bold mb-2 text-slate-900">Human Gates for High-Risk Access:</div>
            <ul className="text-sm space-y-1 text-slate-700">
              <li>• Financial systems → CFO approval required</li>
              <li>• Production AWS → Engineering Director approval</li>
              <li>• Admin panels → Security team review</li>
              <li>• PII databases → Privacy officer sign-off</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border-2 border-blue-300 p-4 rounded-lg shadow">
            <div className="font-bold mb-2 text-slate-900">Control Mechanisms:</div>
            <div className="text-sm grid grid-cols-2 gap-2 text-slate-700">
              <div>• App assignments via groups ONLY</div>
              <div>• Direct user grants are avoided so access stays predictable and auditable</div>
              <div>• Weekly access review (privileged roles)</div>
              <div>• Quarterly audit of all group memberships</div>
            </div>
          </div>
          
          <div className="text-center mt-3 text-sm bg-slate-200 p-3 rounded-lg font-semibold text-slate-900 border-2 border-slate-400 shadow">
            Okta Groups → App Assignments → Conditional Access / MFA → User Access
          </div>
        </div>
      )
    },
    {
      title: "Device Provisioning",
      subtitle: "Zero-Touch + Compliance Gating",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 border-2 border-gray-400 p-3 rounded">
              <div className="font-bold mb-2">Mac (Jamf + Apple Business Manager)</div>
              <ul className="text-sm space-y-1">
                <li>• Device pre-assigned to user in ABM</li>
                <li>• Profile auto-applies on setup</li>
                <li>• FileVault encryption enforced</li>
                <li>• Required apps auto-install</li>
                <li>• Compliance check blocks access if fails</li>
              </ul>
            </div>
            <div className="bg-blue-100 border-2 border-blue-400 p-3 rounded">
              <div className="font-bold mb-2">Windows (Intune + Autopilot)</div>
              <ul className="text-sm space-y-1">
                <li>• Device registered in Autopilot</li>
                <li>• Profile auto-applies on first boot</li>
                <li>• BitLocker encryption enforced</li>
                <li>• Required apps auto-install</li>
                <li>• Compliance check blocks access if fails</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-2 border-yellow-400 p-3 rounded">
            <div className="font-bold mb-2">Device Acquisition Strategy:</div>
            <ul className="text-sm space-y-1">
              <li>• <span className="font-semibold">Remote US hires:</span> Device shipped from IT (2-day priority) with tracking</li>
              <li>• <span className="font-semibold">International hires:</span> Local point person procures and registers to ABM/Autopilot</li>
              <li>• <span className="font-semibold">Device not ready:</span> If hardware is delayed, users get time-bound VDI access so they can still start work</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-2 border-red-300 p-3 rounded">
            <div className="font-bold mb-2">Compliance Gating (Critical):</div>
            <div className="text-sm">Block all app access if device NOT enrolled within 4 hours of first login attempt • Alert IT immediately • User redirected to enrolment instructions • No silent exceptions; time-bound exceptions need Security + Manager approval</div>
          </div>
          
          <div className="bg-green-50 p-3 rounded">
            <div className="font-bold mb-2">Day-0 Checklist (Automated):</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>✓ Device assigned to correct user</div>
              <div>✓ Correct configuration profile applied</div>
              <div>✓ Encryption enabled (FileVault/BitLocker)</div>
              <div>✓ Antivirus installed and updated</div>
              <div>✓ Screen lock policy enforced (5 min)</div>
              <div>✓ Enrollment status = Compliant</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Credentials & Day-1 Login",
      subtitle: "Secure Delivery + Verification",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border-2 border-blue-400 p-4 rounded">
            <div className="font-bold mb-3">Secure Activation Flow (Friday)</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">1</div>
                <div>Okta generates one-time activation link (24-hour expiry)</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">2</div>
                <div>Link sent to personal email provided by recruiter</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">3</div>
                <div>User clicks link → sets permanent password (complexity enforced) — Passwords are set by the user, never handled by IT</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">4</div>
                <div>Forced DUO MFA enrolment (phone/SMS/authenticator)</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">5</div>
                <div>Access granted ONLY after MFA enrolment complete; step-up auth for privileged apps</div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-2 border-green-400 p-3 rounded">
            <div className="font-bold mb-2">IT Verification (Friday Afternoon):</div>
            <ul className="text-sm space-y-1">
              <li>• Test login performed for every user in batch</li>
              <li>• Check MFA enrolment status in DUO admin</li>
              <li>• Verify group memberships applied correctly</li>
              <li>• Review audit logs for any errors</li>
              <li>• Flag failures for immediate fix before Monday</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border-2 border-purple-400 p-3 rounded">
            <div className="font-bold mb-2">Monday Monitoring:</div>
            <ul className="text-sm space-y-1">
              <li>• Track first login attempts (dashboard)</li>
              <li>• Alert if user hasn't logged in by 12pm local</li>
              <li>• Monitor MDM enrolment status</li>
              <li>• Failed logins automatically raise an IT ticket so issues are fixed quickly</li>
              <li>• Regional support notified of new hires</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-3 rounded">
            <div className="font-bold mb-2">Edge Case Handling:</div>
            <div className="text-sm grid grid-cols-2 gap-3">
              <div>
                <div className="font-semibold">Email not received:</div>
                <div>Verify address → resend activation → check spam</div>
              </div>
              <div>
                <div className="font-semibold">Phone lost/unavailable:</div>
                <div>DUO bypass code (manager approval) → re-enrol next day</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Process Workflow",
      subtitle: "Swimlane View with Handoffs",
      content: (
        <div className="space-y-2">
          <div className="grid grid-cols-6 gap-1 text-xs">
            <div className="font-bold bg-gray-200 p-2 text-center">Actor</div>
            <div className="font-bold bg-blue-100 p-2 text-center">Wednesday</div>
            <div className="font-bold bg-blue-100 p-2 text-center">Thursday AM</div>
            <div className="font-bold bg-blue-100 p-2 text-center">Thursday PM</div>
            <div className="font-bold bg-blue-100 p-2 text-center">Friday</div>
            <div className="font-bold bg-blue-100 p-2 text-center">Monday</div>
          </div>
          
          <div className="grid grid-cols-6 gap-1 text-xs">
            <div className="font-bold bg-purple-100 p-2">Recruiter</div>
            <div className="bg-purple-50 p-2 border">Submit form by 23:59 local</div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-gray-50 p-2 border"></div>
          </div>
          
          <div className="grid grid-cols-6 gap-1 text-xs">
            <div className="font-bold bg-blue-100 p-2">IT Admin</div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-blue-50 p-2 border">Review batch • Validate • Import to Okta</div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-blue-50 p-2 border">Verify logins • Check MFA • Fix issues</div>
            <div className="bg-blue-50 p-2 border">Monitor first logins • Alert on failures</div>
          </div>
          
          <div className="grid grid-cols-6 gap-1 text-xs">
            <div className="font-bold bg-green-100 p-2">Okta</div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-green-50 p-2 border">Auto-create accounts • Assign groups • Provision apps</div>
            <div className="bg-green-50 p-2 border">Send activation links</div>
            <div className="bg-gray-50 p-2 border"></div>
          </div>
          
          <div className="grid grid-cols-6 gap-1 text-xs">
            <div className="font-bold bg-yellow-100 p-2">Jamf/Intune</div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-yellow-50 p-2 border">Push device profiles • Pre-assign devices</div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-yellow-50 p-2 border">Verify enrolment • Check compliance</div>
          </div>
          
          <div className="grid grid-cols-6 gap-1 text-xs">
            <div className="font-bold bg-orange-100 p-2">User</div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-gray-50 p-2 border"></div>
            <div className="bg-orange-50 p-2 border">Receive activation • Set password • Enroll MFA</div>
            <div className="bg-orange-50 p-2 border">First login • Device enrolment</div>
          </div>
          
          <div className="mt-4 bg-gray-100 p-3 rounded">
            <div className="font-bold mb-2 text-sm">Key Control Handoffs:</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>Recruiter → IT: Validated batch (CSV)</div>
              <div>IT → Okta: Import file + approval</div>
              <div>Okta → User: Activation link</div>
              <div>Okta → Jamf/Intune: Profile push</div>
              <div>User → IT: First login success</div>
              <div>Jamf/Intune → IT: Compliance status</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ownership at a Glance",
      subtitle: "RACI-style accountability",
      content: (
        <div className="space-y-3">
          <div className="bg-slate-100 border border-slate-300 p-3 rounded">
            <div className="font-bold text-slate-900">Top takeaway: everyone knows what they own, and nothing is ambiguous</div>
          </div>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">Role</th>
                <th className="border p-2 text-left">Accountable for</th>
                <th className="border p-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-semibold">Recruiter / Talent Ops</td>
                <td className="border p-2">Accurate data and on-time submissions</td>
                <td className="border p-2">Owns form completeness; corrects bounces</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2 font-semibold">IT Admin</td>
                <td className="border p-2">Import approval + device assignment</td>
                <td className="border p-2">Ensures source-of-truth file drives Okta</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Security / IT Security</td>
                <td className="border p-2">Privileged approvals & incident response</td>
                <td className="border p-2">Step-up auth + audit for sensitive access</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2 font-semibold">Regional IT</td>
                <td className="border p-2">Local procurement & handover</td>
                <td className="border p-2">Owns shipping/loaner timelines</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: "Automation vs Human Control",
      subtitle: "Every Action Has an Owner",
      content: (
        <div className="space-y-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">Activity</th>
                <th className="border p-2 text-left">Automated</th>
                <th className="border p-2 text-left">Human Control</th>
                <th className="border p-2 text-left">Evidence/Audit</th>
                <th className="border p-2 text-left">Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-semibold">Hire Request</td>
                <td className="border p-2">Form validation</td>
                <td className="border p-2">Recruiter submits</td>
                <td className="border p-2">Form submission log</td>
                <td className="border p-2">Talent Ops</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2 font-semibold">User Creation</td>
                <td className="border p-2">Okta import</td>
                <td className="border p-2">IT approves batch</td>
                <td className="border p-2">Okta audit logs</td>
                <td className="border p-2">IT Admin</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Group Assignment</td>
                <td className="border p-2">Role → group mapping</td>
                <td className="border p-2">High-risk needs approval</td>
                <td className="border p-2">Group membership report</td>
                <td className="border p-2">IT Admin</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2 font-semibold">Device Setup</td>
                <td className="border p-2">MDM profile push</td>
                <td className="border p-2">IT assigns device</td>
                <td className="border p-2">Jamf/Intune enrolment status</td>
                <td className="border p-2">IT Admin</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Credential Delivery</td>
                <td className="border p-2">Activation link sent</td>
                <td className="border p-2">IT verifies delivery</td>
                <td className="border p-2">Email delivery logs</td>
                <td className="border p-2">IT Admin</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2 font-semibold">MFA Enrollment</td>
                <td className="border p-2">Forced on first login</td>
                <td className="border p-2">IT checks completion</td>
                <td className="border p-2">DUO enrolment events</td>
                <td className="border p-2">IT Security</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Device Shipping</td>
                <td className="border p-2">Tracking notification</td>
                <td className="border p-2">Regional coordinator ships</td>
                <td className="border p-2">Tracking + delivery confirmation</td>
                <td className="border p-2">Regional IT</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2 font-semibold">Verification</td>
                <td className="border p-2">Test login scripts</td>
                <td className="border p-2">IT reviews results Friday</td>
                <td className="border p-2">Verification report</td>
                <td className="border p-2">IT Admin</td>
              </tr>
            </tbody>
          </table>
          
          <div className="bg-blue-50 border-2 border-blue-400 p-3 rounded">
            <div className="font-bold mb-2">Advanced Automation Opportunities:</div>
            <ul className="text-sm space-y-1">
              <li>• Okta Workflows to validate import file completeness</li>
              <li>• Auto-create Jira ticket when hire imported</li>
              <li>• Auto-notify regional point person for local device purchase</li>
              <li>• Auto-chase missing fields from recruiters (reminder email)</li>
              <li>• Auto-flag high-risk access requests for Security review</li>
              <li>• Slack bot: daily summary of pending/completed onboardings</li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-500 p-3 rounded">
            <div className="font-bold mb-2">Example automation flow (simple first, expandable later):</div>
            <div className="text-sm space-y-1">
              <div>1) Okta Workflows/API job reads the approved batch CSV</div>
              <div>2) Validates required fields + duplicate check; rejects back to recruiter if missing</div>
              <div>3) Prepares/imports users and role→group mappings into Okta</div>
              <div>4) Posts a Slack summary + opens Jira tasks for any failures</div>
              <div>5) Builds a Monday watchlist for first-login/MDM monitoring</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Failure Modes → Mitigations",
      subtitle: "What we do when things go wrong",
      content: (
        <div className="space-y-3">
          <div className="bg-slate-100 border border-slate-300 p-3 rounded">
            <div className="font-bold text-slate-900">Top takeaway: every common failure has a playbook</div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-blue-50 border-2 border-blue-400 p-3 rounded">
              <div className="font-semibold mb-1">Okta import fails</div>
              <div>Validation report + re-run; alert IT; failed rows tracked</div>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-400 p-3 rounded">
              <div className="font-semibold mb-1">Activation emails bounce</div>
              <div>Auto-flag; recruiter correction loop; resend after fix</div>
            </div>
            <div className="bg-green-50 border-2 border-green-400 p-3 rounded">
              <div className="font-semibold mb-1">MDM enrolment fails</div>
              <div>Guided remediation; fallback manual enrolment; block access until compliant</div>
            </div>
            <div className="bg-orange-50 border-2 border-orange-400 p-3 rounded">
              <div className="font-semibold mb-1">Shipping delayed</div>
              <div>Loaner/VDI + time-bound access; notify manager; track return</div>
            </div>
            <div className="bg-purple-50 border-2 border-purple-400 p-3 rounded">
              <div className="font-semibold mb-1">Wrong role assigned</div>
              <div>Remove groups first → add correct bundle → audit log + Quick root-cause review so we don’t repeat the same mistake</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Exceptions & Edge Cases",
      subtitle: "Operational Readiness",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 border-2 border-yellow-400 p-3 rounded">
            <div className="font-bold mb-2">Identity Incidents:</div>
            <ul className="text-sm space-y-1">
              <li>• <span className="font-semibold">Suspicious login:</span> Auto-lock account → Security team notified → Investigation</li>
              <li>• <span className="font-semibold">Account lockout:</span> IT verifies identity → Reset via DUO admin</li>
              <li>• <span className="font-semibold">Lost MFA device:</span> Manager approval → Temporary bypass code → Re-enrol next day</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-2 border-red-400 p-3 rounded">
            <div className="font-bold mb-2">Device Incidents:</div>
            <ul className="text-sm space-y-1">
              <li>• <span className="font-semibold">Device lost/stolen:</span> Remote wipe via MDM → Replacement shipped (3-day)</li>
              <li>• <span className="font-semibold">Device broken:</span> Local repair (Apple/Dell) OR replacement if out of warranty</li>
              <li>• <span className="font-semibold">Non-compliant device:</span> Block access → User must update/fix → Re-check compliance</li>
              <li>• <span className="font-semibold">Shipping delayed:</span> VDI temporary access OR 1-week start delay (manager approved)</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border-2 border-purple-400 p-3 rounded">
            <div className="font-bold mb-2">People Edge Cases:</div>
            <ul className="text-sm space-y-1">
              <li>• <span className="font-semibold">Role change:</span> Remove old groups first → Add new groups → Verify access</li>
              <li>• <span className="font-semibold">Contractor extension:</span> Update expiry date in Okta → Auto-disable on new end date</li>
              <li>• <span className="font-semibold">No-show (after 5 working days):</span> Disable account → Reclaim device → Archive data → Notify HR</li>
              <li>• <span className="font-semibold">Early termination:</span> Immediate Okta disable → Device retrieval → Exit interview</li>
              <li>• <span className="font-semibold">Leave of absence:</span> Disable account → Re-enable on return date → Verify access works</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-3 rounded">
            <div className="font-bold mb-2">Escalation Paths:</div>
            <div className="text-sm grid grid-cols-2 gap-2">
              <div>Security incidents → Security team (immediate)</div>
              <div>Device failures → Regional IT (4-hour SLA)</div>
              <div>Access issues → IT helpdesk (2-hour SLA)</div>
              <div>System outages → IT leadership + vendor</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Metrics & Quality Controls",
      subtitle: "How We Know It's Working",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 border-2 border-green-400 p-3 rounded">
              <div className="font-bold mb-2">Success Metrics (Weekly):</div>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between">
                  <span>• Day-1 login success rate</span>
                  <span className="font-bold">Target: 98%</span>
                </li>
                <li className="flex justify-between">
                  <span>• MDM enrolment by 12pm Monday</span>
                  <span className="font-bold">Target: 95%</span>
                </li>
                <li className="flex justify-between">
                  <span>• MFA enrolment rate (Friday)</span>
                  <span className="font-bold">Target: 100%</span>
                </li>
                <li className="flex justify-between">
                  <span>• Fast-lane hires (% of total)</span>
                  <span className="font-bold">Track trend</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 border-2 border-red-400 p-3 rounded">
              <div className="font-bold mb-2">Failure Tracking:</div>
              <ul className="text-sm space-y-2">
                <li>• Top 3 failure reasons (ranked)</li>
                <li>• Average time-to-fix for onboarding issues</li>
                <li>• Duplicate/rejected requests per week</li>
                <li>• Devices shipped late (count + reason)</li>
                <li>• Access provisioning errors (by app)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border-2 border-blue-400 p-3 rounded">
            <div className="font-bold mb-2">Quality Control Checks:</div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="font-semibold">Thursday:</div>
                <div>• Batch validation report reviewed</div>
                <div>• Duplicate check passed</div>
              </div>
              <div>
                <div className="font-semibold">Friday:</div>
                <div>• Test logins performed</div>
                <div>• MFA enrolment verified</div>
              </div>
              <div>
                <div className="font-semibold">Monday:</div>
                <div>• First login monitoring active</div>
                <div>• MDM compliance dashboard reviewed</div>
              </div>
              <div>
                <div className="font-semibold">Weekly:</div>
                <div>• Access review for privileged groups</div>
                <div>• Failed onboardings post-mortem</div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-3 rounded">
            <div className="font-bold mb-2">Efficiency Gains:</div>
            <div className="text-sm grid grid-cols-2 gap-2">
              <div>Manual steps per hire: <span className="font-bold">Target ~5–10 minutes</span></div>
              <div>Exceptions requiring IT touch: <span className="font-bold">Target &lt;10% of hires</span></div>
              <div>Regional shipping cost: <span className="font-bold">Reduced via local procurement</span></div>
              <div>Role management overhead: <span className="font-bold">Bundled groups = fewer updates</span></div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-3 rounded text-center">
            <div className="font-bold">Dashboard: Real-time tracking in existing monitoring</div>
            <div className="text-sm mt-1">Weekly reports to IT leadership + quarterly audit reviews</div>
          </div>
        </div>
      )
    },
    {
      title: "Assumptions (So We Stay Honest)",
      subtitle: "Context this design depends on",
      content: (
        <div className="space-y-3">
          <div className="bg-slate-100 border border-slate-300 p-3 rounded">
            <div className="font-bold text-slate-900">Top takeaway: these are inputs, not promises</div>
            <br />These assumptions would be validated during the first month
          </div>
          <ul className="text-sm space-y-2 bg-white border border-slate-200 p-4 rounded">
            <li>• Okta is the IdP; Jamf/Intune are active for zero-touch</li>
            <li>• Recruiters can submit a structured request (form or HR feed)</li>
            <li>• Regional point person exists for local procurement/handover</li>
            <li>• Google Workspace (or primary suite) handles email/collaboration</li>
            <li>• Existing monitoring/alerting is available for dashboards</li>
          </ul>
        </div>
      )
    },
    {
      title: "Offboarding Symmetry",
      subtitle: "Same controls, reversed",
      content: (
        <div className="space-y-3">
          <div className="bg-slate-100 border border-slate-300 p-3 rounded">
            <div className="font-bold text-slate-900">Top takeaway: termination is as controlled as onboarding</div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-red-50 border-2 border-red-400 p-3 rounded">
              <div className="font-semibold mb-1">Identity</div>
              <div>HR termination triggers Okta disable; group removal is automatic; privileged access audited weekly</div>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-400 p-3 rounded">
              <div className="font-semibold mb-1">Devices</div>
              <div>MDM lock or wipe is used if a device isn’t returned within policy timelines; shipping/return tracked; loaners reclaimed</div>
            </div>
            <div className="bg-blue-50 border-2 border-blue-400 p-3 rounded">
              <div className="font-semibold mb-1">Apps</div>
              <div>App access via groups only → removal closes access; service accounts reviewed</div>
            </div>
            <div className="bg-green-50 border-2 border-green-400 p-3 rounded">
              <div className="font-semibold mb-1">Evidence</div>
              <div>Audit log of disable events; weekly leaver report; exception handling requires Security + Manager approval</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Implementation Roadmap",
      subtitle: "Phased Rollout with Validation",
      content: (
        <div className="space-y-3">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3">
            <div className="font-bold mb-1">Phase 1: Foundation (Weeks 1-2)</div>
            <ul className="text-sm space-y-1">
              <li>• Build recruiter form with validation rules</li>
              <li>• Design Okta group structure (role bundles)</li>
              <li>• Document weekly operating model</li>
              <li>• Create swimlane workflows</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-600 p-3">
            <div className="font-bold mb-1">Phase 2: Pilot (Weeks 3-4)</div>
            <ul className="text-sm space-y-1">
              <li>• Test with 5-10 hires (single region)</li>
              <li>• Validate activation link delivery</li>
              <li>• Test MDM enrolment flow</li>
              <li>• Refine based on feedback</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-3">
            <div className="font-bold mb-1">Phase 3: Rollout (Weeks 5-8)</div>
            <ul className="text-sm space-y-1">
              <li>• Expand to all US regions</li>
              <li>• Add international regions incrementally</li>
              <li>• Monitor metrics weekly</li>
              <li>• Gradually automate high-volume steps once the process is stable</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-600 p-3">
            <div className="font-bold mb-1">Phase 4: Optimization (Weeks 9-12)</div>
            <ul className="text-sm space-y-1">
              <li>• Implement advanced automations</li>
              <li>• Refine exception handling</li>
              <li>• Build self-service portal for common issues</li>
              <li>• Conduct security audit</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Navigation menu */}
          <aside className="lg:w-64">
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <div className="font-bold text-slate-900">Slides</div>
                <div className="lg:hidden">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="px-3 py-1 text-sm font-semibold bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
                  >
                    {menuOpen ? 'Close' : 'Menu'}
                  </button>
                </div>
              </div>
              <nav className="hidden lg:block max-h-[75vh] overflow-auto divide-y divide-slate-200">
                {slides.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-full text-left px-4 py-3 text-sm transition ${
                      currentSlide === i
                        ? 'bg-blue-50 text-blue-900 font-semibold'
                        : 'hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-xs text-slate-500">{i + 1}.</span>
                      <span>{slide.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
              {menuOpen && (
                <nav className="lg:hidden divide-y divide-slate-200">
                  {slides.map((slide, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentSlide(i);
                        setMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm transition ${
                        currentSlide === i
                          ? 'bg-blue-50 text-blue-900 font-semibold'
                          : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-xs text-slate-500">{i + 1}.</span>
                        <span>{slide.title}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              )}
            </div>
          </aside>

          {/* Slide content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-2xl p-4 md:p-6 lg:p-8 min-h-[520px] flex flex-col border-2 border-slate-200">
              <div className="mb-4 md:mb-6 pb-4 border-b-2 border-slate-200">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-slate-900">
                  {slides[currentSlide].title}
                </h1>
                {slides[currentSlide].subtitle && (
                  <h2 className="text-lg md:text-xl text-slate-600 font-medium">
                    {slides[currentSlide].subtitle}
                  </h2>
                )}
              </div>
              
              <div className="flex-1 overflow-auto space-y-4">
                {slides[currentSlide].content}
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between gap-3 items-stretch md:items-center mt-6 pt-4 border-t-2 border-slate-200">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-blue-700 transition shadow-md"
                >
                  <ChevronLeft size={20} />
                  Previous
                </button>
                
                <div className="text-center text-slate-700 font-semibold text-base md:text-lg">
                  Slide {currentSlide + 1} of {slides.length}
                </div>
                
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-blue-700 transition shadow-md"
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default OnboardingDeck;