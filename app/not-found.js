//import tools
import { redirect } from 'next/navigation';

export default function NotFound() {
  //if this page is hit, it redirects back to home
  redirect('/');
}
