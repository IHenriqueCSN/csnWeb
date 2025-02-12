export type RGB = `rgb(${number}, ${number}, ${number})`;
export type Color = RGB;

export interface ColorScheme {
    primary: Color;
    secondary: Color;
    tertiary: Color;
}

export interface HeaderDetails {
    title: string;
    text: string;
    colorScheme: ColorScheme;
    backgroundImage?: string; // Optional image URL
}

export interface HeaderProps {
    details: HeaderDetails;
}

const ServiceHeader: React.FC<HeaderProps> = ({ details }) => {
    return (
        <header className="w-full relative overflow-hidden">
            {/* Background Container */}
            <div 
                className="w-full min-h-[500px] flex items-center justify-center relative"
                style={{
                    backgroundColor: details.colorScheme.primary,
                    backgroundImage: details.backgroundImage 
                        ? `url(${details.backgroundImage})` 
                        : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Overlay (only if backgroundImage is provided) */}
                {details.backgroundImage && (
                    <div 
                        className="absolute inset-0"
                        style={{
                            backgroundColor: details.colorScheme.primary,
                            opacity: 0.7 // Adjust opacity as needed
                        }}
                    />
                )}

                {/* Animated Accent Elements */}
                <div 
    className="absolute inset-0 opacity-15"
    style={{
        background: `
            linear-gradient(to right, ${details.colorScheme.secondary} 1px, transparent 1px),
            linear-gradient(to bottom, ${details.colorScheme.secondary} 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px' // Adjust grid size as needed
    }}
/>

                {/* Content */}
                <div className="relative z-10 text-center px-8">
                    <h1 
                        className="text-6xl font-bold mb-6 animate-fade-in-up"
                        style={{ 
                            color: details.colorScheme.tertiary,
                            textShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        {details.title}
                    </h1>
                    
                    <p 
                        className="text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100"
                        style={{ color: details.colorScheme.tertiary }}
                    >
                        {details.text}
                    </p>
                    
                    <div 
                        style={{ 
                            backgroundColor: details.colorScheme.secondary,
                            height: '4px',
                            width: '120px'
                        }}
                        className="rounded-full mt-8 mx-auto animate-scale-in"
                    />
                </div>
            </div>
        </header>
    );
}

export default ServiceHeader;