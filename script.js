const users = [
  {
    name: 'Sarah Chen',
    username: 's.chen',
    dept: 'Finance · Floor 3',
    status: 'active',
    device: {
      hostname: 'FIN-SCHEN-01',
      os: 'Windows 11 Pro',
      biosVersion: 'N1WET42W (1.28)',
      leaseExpiration: '2026-11-30',
      lastseen: 'Today, 9:41 AM',
      lastCheckIn: 'Today, 9:34 AM',
      lastLogin: 'Today, 8:52 AM',
      disk: '72% used',
      diskWarn: true,
      ram: '16 GB',
      av: 'Up to date',
      installedApps: ['Microsoft 365 Apps', 'Adobe Acrobat Reader', 'Zoom Workplace', 'Slack', 'Cisco Secure Client'],
      actionHistory: [
        { action: 'Remote Lock', staff: 'Avery Stone (@astone)', timestamp: '2026-06-12 09:18 AM' },
        { action: 'Software Push', staff: 'Mina Patel (@mpatel)', timestamp: '2026-06-11 04:42 PM' },
        { action: 'Force Restart', staff: 'Jordan Lee (@jlee)', timestamp: '2026-06-10 01:07 PM' },
      ],
    },
  },
  {
    name: 'Marcus Williams',
    username: 'm.williams',
    dept: 'Engineering · Floor 5',
    status: 'active',
    device: {
      hostname: 'ENG-MWILL-02',
      os: 'macOS Sequoia',
      biosVersion: 'MBA-15,3 119.0.0',
      leaseExpiration: '2027-02-14',
      lastseen: 'Today, 11:02 AM',
      lastCheckIn: 'Today, 10:58 AM',
      lastLogin: 'Today, 10:21 AM',
      disk: '38% used',
      diskWarn: false,
      ram: '32 GB',
      av: 'Up to date',
      installedApps: ['Xcode', 'Docker Desktop', 'Google Chrome', 'Slack', 'Visual Studio Code', 'Postman'],
      actionHistory: [
        { action: 'Software Push', staff: 'Mina Patel (@mpatel)', timestamp: '2026-06-12 08:45 AM' },
        { action: 'Remote Unlock', staff: 'Avery Stone (@astone)', timestamp: '2026-06-09 03:12 PM' },
        { action: 'Policy Sync', staff: 'Jordan Lee (@jlee)', timestamp: '2026-06-08 11:29 AM' },
      ],
    },
  },
  {
    name: 'Lin Torres',
    username: 'l.torres',
    dept: 'HR · Floor 2',
    status: 'offline',
    device: {
      hostname: 'HR-LTORR-01',
      os: 'Windows 10 Pro',
      biosVersion: 'HPQOEM - 2.16.0',
      leaseExpiration: '2026-08-21',
      lastseen: 'Yesterday, 5:18 PM',
      lastCheckIn: 'Yesterday, 4:59 PM',
      lastLogin: 'Yesterday, 3:40 PM',
      disk: '51% used',
      diskWarn: false,
      ram: '8 GB',
      av: '⚠ Outdated',
      avWarn: true,
      installedApps: ['Microsoft 365 Apps', 'Teams Classic', 'Adobe Acrobat Reader', 'Chrome', 'OneDrive'],
      actionHistory: [
        { action: 'Force Restart', staff: 'Jordan Lee (@jlee)', timestamp: '2026-06-11 05:22 PM' },
        { action: 'Antivirus Update', staff: 'Avery Stone (@astone)', timestamp: '2026-06-10 02:10 PM' },
        { action: 'Remote Lock', staff: 'Mina Patel (@mpatel)', timestamp: '2026-06-07 09:03 AM' },
      ],
    },
  },
  {
    name: 'James Okafor',
    username: 'j.okafor',
    dept: 'IT · Floor 1',
    status: 'active',
    device: {
      hostname: 'IT-JOKAF-03',
      os: 'Windows 11 Pro',
      biosVersion: 'Dell 1.19.2',
      leaseExpiration: '2027-05-09',
      lastseen: 'Today, 8:55 AM',
      lastCheckIn: 'Today, 8:51 AM',
      lastLogin: 'Today, 8:12 AM',
      disk: '29% used',
      diskWarn: false,
      ram: '16 GB',
      av: 'Up to date',
      installedApps: ['Intune Company Portal', 'PowerShell 7', 'Visual Studio Code', 'Microsoft Edge', '7-Zip'],
      actionHistory: [
        { action: 'Software Push', staff: 'Mina Patel (@mpatel)', timestamp: '2026-06-12 07:58 AM' },
        { action: 'Compliance Scan', staff: 'Avery Stone (@astone)', timestamp: '2026-06-10 04:33 PM' },
        { action: 'Force Restart', staff: 'Jordan Lee (@jlee)', timestamp: '2026-06-09 09:44 AM' },
      ],
    },
  },
  {
    name: 'Priya Nair',
    username: 'p.nair',
    dept: 'Operations · Floor 4',
    status: 'active',
    device: {
      hostname: 'OPS-PNAIR-04',
      os: 'Windows 11 Pro',
      biosVersion: 'Lenovo N3IET32W',
      leaseExpiration: '2026-12-18',
      lastseen: 'Today, 10:26 AM',
      lastCheckIn: 'Today, 10:20 AM',
      lastLogin: 'Today, 9:11 AM',
      disk: '44% used',
      diskWarn: false,
      ram: '16 GB',
      av: 'Up to date',
      installedApps: ['Microsoft 365 Apps', 'Teams', 'ServiceNow Agent', 'Chrome', 'WinZip'],
      actionHistory: [
        { action: 'Remote Unlock', staff: 'Avery Stone (@astone)', timestamp: '2026-06-12 09:08 AM' },
        { action: 'Software Push', staff: 'Mina Patel (@mpatel)', timestamp: '2026-06-11 02:15 PM' },
        { action: 'Policy Sync', staff: 'Jordan Lee (@jlee)', timestamp: '2026-06-09 11:47 AM' },
      ],
    },
  },
  {
    name: 'Daniel Brooks',
    username: 'd.brooks',
    dept: 'Sales · Floor 6',
    status: 'offline',
    device: {
      hostname: 'SAL-DBROOKS-02',
      os: 'Windows 10 Pro',
      biosVersion: 'Dell 1.15.0',
      leaseExpiration: '2026-09-02',
      lastseen: 'Today, 7:58 AM',
      lastCheckIn: 'Today, 7:41 AM',
      lastLogin: 'Today, 7:05 AM',
      disk: '63% used',
      diskWarn: true,
      ram: '8 GB',
      av: 'Up to date',
      installedApps: ['Microsoft 365 Apps', 'Salesforce Desktop', 'Zoom Workplace', 'Adobe Reader', 'Chrome'],
      actionHistory: [
        { action: 'Force Restart', staff: 'Jordan Lee (@jlee)', timestamp: '2026-06-11 08:44 AM' },
        { action: 'Software Push', staff: 'Mina Patel (@mpatel)', timestamp: '2026-06-10 06:12 PM' },
        { action: 'Remote Lock', staff: 'Avery Stone (@astone)', timestamp: '2026-06-08 03:05 PM' },
      ],
    },
  },
  {
    name: 'Elena Petrova',
    username: 'e.petrova',
    dept: 'Design · Floor 7',
    status: 'active',
    device: {
      hostname: 'DSN-EPETRO-01',
      os: 'macOS Sequoia',
      biosVersion: 'MacBookPro18,3 10151.1',
      leaseExpiration: '2027-03-27',
      lastseen: 'Today, 12:14 PM',
      lastCheckIn: 'Today, 12:09 PM',
      lastLogin: 'Today, 11:33 AM',
      disk: '27% used',
      diskWarn: false,
      ram: '32 GB',
      av: 'Up to date',
      installedApps: ['Figma', 'Adobe Creative Cloud', 'Slack', 'Google Chrome', 'Notion', 'Visual Studio Code'],
      actionHistory: [
        { action: 'Software Push', staff: 'Mina Patel (@mpatel)', timestamp: '2026-06-12 10:01 AM' },
        { action: 'Remote Unlock', staff: 'Avery Stone (@astone)', timestamp: '2026-06-11 01:18 PM' },
        { action: 'Compliance Scan', staff: 'Jordan Lee (@jlee)', timestamp: '2026-06-09 04:27 PM' },
      ],
    },
  },
];

function searchUser() {
  const query = document.getElementById('search-input').value.toLowerCase().trim();
  const resultsDiv = document.getElementById('results');
  const noResults = document.getElementById('no-results');

  if (query === '') {
    resultsDiv.style.display = 'none';
    noResults.style.display = 'none';
    return;
  }

  const match = users.find((user) => user.name.toLowerCase().includes(query) || user.username.toLowerCase().includes(query));

  if (match) {
    noResults.style.display = 'none';
    resultsDiv.style.display = 'block';
    populateResults(match);
  } else {
    resultsDiv.style.display = 'none';
    noResults.style.display = 'block';
  }
}

function populateResults(user) {
  document.getElementById('user-avatar').textContent = user.name.split(' ').map((word) => word[0]).join('');
  document.getElementById('user-name').textContent = user.name;
  document.getElementById('user-meta').textContent = `@${user.username} · ${user.dept}`;

  const statusEl = document.getElementById('user-status');
  statusEl.textContent = user.status === 'active' ? '● Active' : '○ Offline';
  statusEl.className = `badge ${user.status}`;

  document.getElementById('d-hostname').textContent = user.device.hostname;
  document.getElementById('d-os').textContent = user.device.os;
  document.getElementById('d-bios').textContent = user.device.biosVersion;
  document.getElementById('d-lease').textContent = user.device.leaseExpiration;
  document.getElementById('d-lastseen').textContent = user.device.lastseen;
  document.getElementById('d-checkin').textContent = user.device.lastCheckIn;
  document.getElementById('d-lastlogin').textContent = user.device.lastLogin;
  document.getElementById('d-ram').textContent = user.device.ram;

  const appList = document.getElementById('d-apps');
  appList.innerHTML = user.device.installedApps.map((app) => `<li>${app}</li>`).join('');

  const diskEl = document.getElementById('d-disk');
  diskEl.textContent = user.device.disk;
  diskEl.className = user.device.diskWarn ? 'value warn' : 'value ok';

  const avEl = document.getElementById('d-av');
  avEl.textContent = user.device.av;
  avEl.className = user.device.avWarn ? 'value warn' : 'value ok';

  const historyList = document.getElementById('action-history-list');
  historyList.innerHTML = user.device.actionHistory
    .map(
      (entry) => `
        <div class="history-item">
          <div class="history-action">${entry.action}</div>
          <div class="history-meta">
            <span>${entry.staff}</span>
            <span>${entry.timestamp}</span>
          </div>
        </div>
      `
    )
    .join('');

  resetTicket();
}

function quickSearch(name) {
  document.getElementById('search-input').value = name;
  searchUser();
}

let selectedTicketType = null;

function selectTicket(btn) {
  document.querySelectorAll('.ticket-btn').forEach((button) => button.classList.remove('selected'));
  btn.classList.add('selected');
  selectedTicketType = btn.textContent;
}

function loadAllTickets() {
  const storageKey = 'IT_Tool_Tickets';
  const storedTickets = localStorage.getItem(storageKey);

  if (!storedTickets) {
    return [];
  }

  try {
    const parsedTickets = JSON.parse(storedTickets);
    return Array.isArray(parsedTickets) ? parsedTickets : [];
  } catch (error) {
    return [];
  }
}

function saveTicket(ticket) {
  const storageKey = 'IT_Tool_Tickets';
  const tickets = loadAllTickets();

  tickets.push(ticket);
  localStorage.setItem(storageKey, JSON.stringify(tickets));
}

function renderTickets() {
  const tickets = loadAllTickets();
  const container = document.getElementById('IT_Tool_Tickets');

  if (!container) {
    return;
  }

  if (tickets.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #888;">No tickets yet.</p>';
    return;
  }

  const sortedTickets = [...tickets].reverse();

  const html = sortedTickets
    .map(
      (ticket) => `
        <div class="ticket-item">
          <div class="ticket-header">
            <span class="ticket-id">${ticket.id}</span>
            <span class="ticket-type">${ticket.type}</span>
            <span class="ticket-time">${ticket.createdAt}</span>
          </div>
          <div class="ticket-user">User: ${ticket.user}</div>
          ${ticket.notes ? `<div class="ticket-notes">Notes: ${ticket.notes}</div>` : ''}
        </div>
      `
    )
    .join('');

  container.innerHTML = html;
}

function submitTicket() {
  const notes = document.getElementById('ticket-notes').value.trim();
  const userName = document.getElementById('user-name').textContent;
  const toast = document.getElementById('ticket-success');

  if (!selectedTicketType) {
    alert('Please select an issue type first.');
    return;
  }

  const ticketId = 'TKT-' + Math.floor(10000 + Math.random() * 90000);
  const now = new Date();
  const createdAt = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
  const ticket = {
    id: ticketId,
    type: selectedTicketType,
    notes,
    user: userName,
    createdAt,
  };

  saveTicket(ticket);
  renderTickets();

  toast.style.display = 'block';
  toast.textContent = `✓ ${ticketId} created for ${userName} · "${selectedTicketType}"` + (notes ? ` · Notes: "${notes}"` : '');
}

function resetTicket() {
  selectedTicketType = null;
  document.querySelectorAll('.ticket-btn').forEach((button) => button.classList.remove('selected'));
  document.getElementById('ticket-notes').value = '';
  document.getElementById('ticket-success').style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  renderTickets();
});