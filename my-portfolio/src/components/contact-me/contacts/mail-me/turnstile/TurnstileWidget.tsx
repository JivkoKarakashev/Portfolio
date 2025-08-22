import { Turnstile, type TurnstileProps } from '@marsidev/react-turnstile';

import { verifyToken } from './turnstileWidgetService.ts';
import type { ApiResponse } from '../../../../../types/turnstile.ts';

interface ChildProps {
    onToken: (t: string) => void,
    onVerified: (v: boolean) => void
}

const TurnstileWidget = ({ onToken, onVerified }: ChildProps) => {

    const props: TurnstileProps = {
        siteKey: import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITEKEY,
        options: {
            action: 'mail-me-form',
            theme: 'dark',
            size: 'flexible'
        },
        scriptOptions: {
            defer: true,
            async: true,
            appendTo: 'body'
        },
        async onSuccess(token) {
            onToken(token);
            await verifyToken(token)
                .then(resp => resp.json())
                .then((data: ApiResponse) => {
                    if (data.success && data.data?.verified) {
                        onVerified(data.data?.verified);
                        // alert('Turnstile Widget was verified successful!');
                    } else {
                        alert('Turnstile Widget verification process was failed!' + data?.error);
                    }
                })
                .catch(err => {
                    console.error('Verification error:', err);
                    alert('Server error verifying Turnstile.');
                });
        }
    }

    return (
        <>
            <Turnstile {...props} />
        </>
    );
};

export {
    TurnstileWidget
}