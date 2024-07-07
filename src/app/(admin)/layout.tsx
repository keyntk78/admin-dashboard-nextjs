import AdminPanelLayout from '@/components/Admin/Layout/AdminPanelLayout'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>
}
