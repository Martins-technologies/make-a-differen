import { Navigate } from 'react-router-dom';
import { DONATE_SUPPLIES_PATH } from '@/components/layout/navConfig';

export default function DonateSuppliesPage() {
  return <Navigate to={DONATE_SUPPLIES_PATH} replace />;
}
