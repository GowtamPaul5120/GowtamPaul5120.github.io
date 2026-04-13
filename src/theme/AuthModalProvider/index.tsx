import React, { useState, useEffect } from 'react';
import AuthModal from '../AuthModal';

interface AuthModalState {
  isOpen: boolean;
  editUrl: string;
}

export default function AuthModalProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [modalState, setModalState] = useState<AuthModalState>({
    isOpen: false,
    editUrl: ''
  });

  useEffect(() => {
    const handleShowAuthModal = (event: CustomEvent) => {
      setModalState({
        isOpen: true,
        editUrl: event.detail.editUrl
      });
    };

    window.addEventListener('showAuthModal', handleShowAuthModal as EventListener);

    return () => {
      window.removeEventListener('showAuthModal', handleShowAuthModal as EventListener);
    };
  }, []);

  const handleCloseModal = () => {
    setModalState({ isOpen: false, editUrl: '' });
  };

  return (
    <>
      {children}
      <AuthModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        editUrl={modalState.editUrl}
      />
    </>
  );
}
