import { Button, Input, Modal, Toast, Loader } from "../components/ui";
import { useState } from "react";

const Showcase = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-10 space-y-8 min-h-screen">

      <h1 className="text-4xl font-bold">
        UI Components Showcase
      </h1>

      {/* Buttons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>

        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Input</h2>

        <Input
          label="Name"
          placeholder="Enter your name"
        />
      </div>

      {/* Loader */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Loader</h2>

        <Loader />
      </div>

      {/* Toast */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Toast</h2>

        <Toast message="Success! Component working." />
      </div>

      {/* Modal */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Modal</h2>

        <Button onClick={() => setShowModal(true)}>
          Open Modal
        </Button>

        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Demo Modal"
        >
          <p>This is a sample modal component.</p>
        </Modal>
      </div>

    </div>
  );
};

export default Showcase;