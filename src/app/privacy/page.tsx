import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function PrivacyPage() {
  return (
    <div className="page-container content-page">
      <div className="page-heading">
        <span className="eyebrow">YOUR INFORMATION</span>
        <h1>Privacy policy.</h1>
        <p>
          Draft content for review — not legal advice and not yet approved for
          publication.
        </p>
      </div>
      <h2>1. Demo status</h2>
      <p>
        This storefront is a frontend-only demonstration. Contact and checkout
        forms display local validation feedback and do not send submitted
        information to a server.
      </p>
      <h2>2. Local cart storage</h2>
      <p>
        The shopping cart may be stored in your browser so that cart items
        persist between visits. This demonstration does not synchronize cart
        data with a backend.
      </p>
      <h2>3. Future production use</h2>
      <p>
        Before launch, this policy must accurately explain what personal
        information the live store collects, why it is collected, how it is
        secured, who receives it, and how customers can exercise applicable
        rights.
      </p>
      <h2>4. Contact</h2>
      <p>
        Official privacy contact details will be added after they are confirmed.
      </p>
    </div>
  );
}
