import React, { useState, useEffect } from 'react';
import ProductDetailsModal from './ProductDetailsModal';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Complete professional display and tech products with detailed specifications
  const products = [
    {
      id: 1,
      name: 'INVISION OPS Integrated Mini PC',
      modelCode: 'DS-2022',
      image: 'https://www.isemc.com/images/2023/07/18/lcd-video-wall-and-panel.webp',
      description: 'Professional integrated mini PC for tactile screen applications, delivered with Microsoft Office 2019 Standard with activation key and Windows license.',
      features: ['Touch Enabled', '4K Resolution', 'Multi-User Support'],
      layoutStyle: 'hero',
      inStock: true,
      isNew: false,
      category: 'Interactive Displays',
      generalFunctionality: [
        'Windows 10 Pro operating system installed and activated',
        'Microsoft Office 2019 Standard with activation key'
      ],
      specifications: {
        'GENERAL CHARACTERISTICS': [
          { label: 'Processor', value: 'Intel Core i7-11G (2.0 GHz Turbo Boost 4.5 GHz)' },
          { label: 'Memory', value: 'DDR4 with 16GB' },
          { label: 'Interface', value: 'SSD M.2 2280 NVMe PCIe Gen3' },
          { label: 'Storage', value: 'SSD with 256 GB' },
          { label: 'Graphics Card', value: 'Intel® UHD Graphics 630 Intel H510 integrated chipset' },
          { label: 'Wireless', value: 'Intel AX200 WiFi 6 + BT5.2 dual-band module' },
          { label: 'Network', value: 'Gigabit LAN Ethernet' }
        ]
      },
      inputs: [
        'MIC (microphone) x 1'
      ],
      outputs: [
        'DisplayPort x 1 (3840x2160@60Hz)',
        'HDMI x 1 (3840x2160@60Hz)',
        'Audio x 1 line output'
      ],
      softwareIncluded: [
        'Adobe Reader/Annotation software with license'
      ]
    },
    {
      id: 2,
      name: 'INVISION White Sliding Whiteboard',
      modelCode: 'IS-4SB',
      image: 'https://gtoffice.co.uk/wp-content/uploads/2023/02/LCD-Video-Wall-White-Background-Image-2.jpg',
      description: 'Professional sliding whiteboard with 4 sliding doors, 02 sliding doors for projection protection',
      features: ['Sliding Doors', 'Projection Protection', 'Aluminum Frame'],
      layoutStyle: 'wide',
      inStock: true,
      isNew: false,
      category: 'Interactive Whiteboards',
      generalFunctionality: [
        'White board with 4 sliding doors for projection protection',
        'Aluminum frame with plastic corners and integrated lateral sealing system',
        'Sliding doors at front and fixed panels at back'
      ],
      specifications: {
        'BOARD SPECIFICATIONS': [
          { label: 'Dimensions', value: '4200 x 1300 x 190 mm' },
          { label: 'Frame Material', value: 'Aluminum with plastic corners' },
          { label: 'Sealing System', value: 'Integrated lateral sealing with aluminum side joints' },
          { label: 'Profile', value: 'Aluminum silver profile 90mm x 50mm with 30mm x 20mm inner frame' },
          { label: 'Wall Thickness', value: '1.2 mm profile wall thickness' }
        ],
        'SLIDING DOORS': [
          { label: 'Door Dimensions', value: '1015 x 1215 mm each' },
          { label: 'Frame Construction', value: '15mm frame with 02 galvanized steel sheets 0.16mm' },
          { label: 'Interior Foam', value: 'Polystyrene foam interior' },
          { label: 'Writing Surface', value: 'White ceramic writing surface ±0.2mm' },
          { label: 'Surface Resistance', value: '900° corrosion and scratch resistant' },
          { label: 'Paint Durability', value: '9H hardness paint + 0.025 paint layer' }
        ],
        'SLIDING MECHANISM': [
          { label: 'Rail System', value: 'Double group suspension rail with quality bearings' },
          { label: 'Lower Rail', value: 'Horizontal double group rail for smooth sliding' },
          { label: 'Positioning', value: 'Precise front/back positioning with secure locking' },
          { label: 'Sliding Tolerance', value: 'Less than 0.5mm front/back tolerance' },
          { label: 'Groups', value: '8 groups installed uniformly top to bottom' }
        ]
      },
      inputs: [],
      outputs: [],
      softwareIncluded: [],
      additionalFeatures: [
        'Rails with 2 mobile equipment and 4 end-of-travel stops',
        'Key locking for 2 sliding panels',
        'Electrostatic protection film must be applied to surface during transport'
      ]
    },
    {
      id: 3,
      name: 'LED Video Wall Display',
      modelCode: 'MUR-P1.9',
      image: 'https://static.truesoundhire.co.uk/wp-content/uploads/3.9-mm-led-video-wall-hire-2.jpg',
      description: 'Professional LED video wall with exceptional image quality and advanced technology for outstanding display performance',
      features: ['P1.9 Pixel Pitch', 'High Brightness', 'Easy Maintenance'],
      layoutStyle: 'tall',
      inStock: true,
      isNew: true,
      category: 'LED Video Walls',
      generalFunctionality: [
        'Exceptional image quality with advanced LED technology',
        'High luminosity for all ambient lighting conditions',
        'Easy maintenance with front access LED modules',
        'Integrated project management from design to maintenance'
      ],
      specifications: {
        'DISPLAY CHARACTERISTICS': [
          { label: 'Pixel Pitch', value: 'P1.9 | P2.5 | P3.1 | P3.8' },
          { label: 'Technology', value: 'SMD LED with exceptional image quality' },
          { label: 'Brightness', value: 'High luminosity 800 cd/m²' },
          { label: 'Contrast Ratio', value: '5000:1' },
          { label: 'Viewing Angles', value: 'H:178° V:178°' },
          { label: 'Refresh Rate', value: '3840Hz' }
        ],
        'TECHNICAL FEATURES': [
          { label: 'Color Processing', value: '16-bit color processing' },
          { label: 'Color Gamut', value: 'Wide color gamut coverage' },
          { label: 'Uniformity', value: 'High color and brightness uniformity' },
          { label: 'Lifespan', value: '100,000+ hours' },
          { label: 'Operating Temperature', value: '-20°C to +60°C' },
          { label: 'Humidity Range', value: '10% - 90% RH' }
        ],
        'INSTALLATION': [
          { label: 'Mounting', value: 'Wall mount, floor stand, ceiling mount' },
          { label: 'Maintenance', value: 'Front access for easy maintenance' },
          { label: 'Module Replacement', value: 'Hot-swappable LED modules' },
          { label: 'Calibration', value: 'Factory calibrated, field adjustable' }
        ]
      },
      inputs: [
        'HDMI input',
        'DisplayPort input',
        'DVI input',
        'Ethernet input'
      ],
      outputs: [
        'Loop-through outputs',
        'Monitoring outputs'
      ],
      softwareIncluded: [
        'Content management software',
        'Calibration software',
        'Remote monitoring system'
      ]
    },
    {
      id: 4,
      name: 'INVISION 65" Touch Display Totem',
      modelCode: 'IS-6512',
      image: 'https://gtoffice.co.uk/wp-content/uploads/2023/02/LCD-Video-Wall-White-Background-Image-1.jpg',
      description: 'Professional 65-inch interactive touch display totem with 10-point infrared touch technology',
      features: ['65" Touch Screen', '4K Resolution', 'Android 7.1'],
      layoutStyle: 'medium',
      inStock: true,
      isNew: false,
      category: 'Digital Signage',
      generalFunctionality: [
        '10-point infrared touch technology',
        'Opaque writing tools like fingers, stylus, etc.',
        'Single point response touch, first point (right) BMS continuous writing',
        'Multi-point 3MS response, first point (right) BMS continuous writing (manuscript) BMS'
      ],
      specifications: {
        'DISPLAY SPECIFICATIONS': [
          { label: 'Screen Size', value: '65 inches' },
          { label: 'Display Size', value: '1428.4 x 803.5 mm' },
          { label: 'Product Dimensions', value: '2023 x 902 x 460 mm' },
          { label: 'Resolution', value: 'Horizontal 1920*1080 / Vertical 1080*1920' },
          { label: 'Pixel Correction', value: '0.1515 x 0.4845 mm' },
          { label: 'Frequency H', value: '121 KHZ-140 KHZ' },
          { label: 'Frequency V', value: '108 HZ/122 HZ' }
        ],
        'TOUCH TECHNOLOGY': [
          { label: 'Touch Points', value: '10-point infrared touch' },
          { label: 'Touch Resolution', value: '32767*32767' },
          { label: 'Cursor Speed', value: 'Single point up to 300 points/sec, Multi-point 125 points/sec' },
          { label: 'Response Time', value: '8-12 (tr/tf) ms' },
          { label: 'Viewing Angles', value: '178°/178°/178°/178°' },
          { label: 'Colors', value: '16.77M colors' }
        ],
        'SYSTEM SPECIFICATIONS': [
          { label: 'Lifespan', value: '50,000 hours or 600 million clicks' },
          { label: 'Brightness', value: '400cd/m2' },
          { label: 'Contrast Ratio', value: '5000:1' },
          { label: 'Storage Temperature', value: '-20°-40°' },
          { label: 'Operating Temperature', value: '0°-40°' },
          { label: 'Android Version', value: 'Android 7.1' },
          { label: 'CPU', value: 'RK3288 Quad-core 1.8 GHz' },
          { label: 'RAM/ROM', value: '2 GB / 8 GB' }
        ]
      },
      inputs: [
        'HDMI x2 (3840 x 2160 @ 60 Hz, HDCP2.2, CEC)',
        'RVB/VGA x1 (1920 x 1080 @ 60 Hz)',
        'Audio x1 (PC audio input)',
        'RS232 x1',
        'Wi-Fi 2.4 GHz'
      ],
      outputs: [
        'DisplayPort x1 (3840x2160 @60Hz)',
        'Audio line output',
        'USB charging port'
      ],
      softwareIncluded: [
        'Content management and display software',
        'USB disk charging software',
        'Internet support'
      ],
      additionalFeatures: [
        'Automatic shutdown: Yes',
        'Video formats: wmv, avi, flv, rm, rmvb, mpeg, ts, mp4, etc.',
        'Characteristics: software management, content display and USB disk charging',
        'Support: black screen saver'
      ]
    },
    {
      id: 5,
      name: 'INVISION 75" 4K Touch Screen',
      modelCode: 'IS-7516',
      image: 'https://gtoffice.co.uk/wp-content/uploads/2023/02/LCD-Video-Wall-White-Background-Image-1.jpg',
      description: 'Professional 75-inch 4K touch screen with integrated camera and advanced touch technology',
      features: ['75" 4K Display', 'Integrated Camera', 'Ultra Fine Touch'],
      layoutStyle: 'small',
      inStock: true,
      isNew: true,
      category: 'Interactive Displays',
      generalFunctionality: [
        '4K UHD 3840x2160 resolution with exceptional clarity',
        'Integrated camera for video conferencing',
        'Ultra Fine Touch (UFT) technology for precise interaction',
        '20-point multi-touch capability for collaborative work'
      ],
      specifications: {
        'DISPLAY CHARACTERISTICS': [
          { label: 'Screen Size', value: '75 inches' },
          { label: 'Panel Type', value: 'LCD TFT module with DLED backlight' },
          { label: 'Display Area', value: '1650.24(H) x 928.26(V) mm' },
          { label: 'Aspect Ratio', value: '16:9' },
          { label: 'Resolution', value: 'UHD 3840x2160 (4K)' },
          { label: 'Colors', value: '1.078 billion colors (10-bit)' },
          { label: 'Brightness', value: '450 nits' },
          { label: 'Contrast Ratio', value: '1200:1' },
          { label: 'Response Time', value: '8 ms' },
          { label: 'Viewing Angles', value: 'H=178°, V=178°' },
          { label: 'Backlight Lifespan', value: '50,000 hours' }
        ],
        'TOUCH TECHNOLOGY': [
          { label: 'Touch Type', value: 'Ultra Fine Touch (UFT) Technology' },
          { label: 'Touch Resolution', value: '32767 x 32767' },
          { label: 'Touch Points', value: 'Windows: 40 points / Android: 20 points' },
          { label: 'Surface Treatment', value: 'Durable 9H anti-fingerprint and anti-glare coating' }
        ],
        'SYSTEM PLATFORM': [
          { label: 'Processor', value: 'ARM Quad-core A78 + Quad-core A65' },
          { label: 'RAM', value: '8 GB' },
          { label: 'Storage', value: '128 GB' },
          { label: 'Operating System', value: 'Android' }
        ],
        'CONTROL BUTTONS': [
          { label: 'Functions', value: 'Power, Menu, Volume-, Volume+, Settings, Eye Protection, Power' }
        ]
      },
      inputs: [
        'HDMI x2 (3840 x 2160 @ 60 Hz, HDCP2.2, CEC)',
        'RVB/VGA x1 (1920 x 1080 @ 60 Hz)',
        'Audio x1 (PC audio input)',
        'RS232 x1',
        'Wi-Fi module included'
      ],
      outputs: [
        'DisplayPort x1 (3840x2160 @60Hz)',
        'Audio output',
        'OPS module slot x1'
      ],
      softwareIncluded: [
        'Interactive whiteboard software',
        'Screen sharing applications',
        'Digital annotation tools'
      ]
    },
    {
      id: 6,
      name: 'Outdoor Digital Totem Display',
      modelCode: 'ODT-55',
      image: 'https://gtoffice.co.uk/wp-content/uploads/2023/02/LCD-Video-Wall-White-Background-Image-1.jpg',
      description: 'Weatherproof outdoor digital totem with high brightness display for all-weather performance',
      features: ['IP65 Rated', '2500 nits Brightness', 'Tempered Glass'],
      layoutStyle: 'small',
      inStock: true,
      isNew: false,
      category: 'Outdoor Displays',
      generalFunctionality: [
        'IP65 weatherproof rating for outdoor use',
        'High brightness 2500 nits for sunlight readability',
        'Tempered glass protection against vandalism',
        'Built-in cooling and heating system for extreme temperatures'
      ],
      specifications: {
        'DISPLAY SPECIFICATIONS': [
          { label: 'Screen Size', value: '55 inches' },
          { label: 'Resolution', value: 'Full HD 1920x1080' },
          { label: 'Brightness', value: '2500 nits' },
          { label: 'Contrast Ratio', value: '4000:1' },
          { label: 'Viewing Angles', value: '178°/178°' },
          { label: 'Lifespan', value: '50,000+ hours' }
        ],
        'ENVIRONMENTAL PROTECTION': [
          { label: 'IP Rating', value: 'IP65 (front), IP54 (rear)' },
          { label: 'Operating Temperature', value: '-30°C to +50°C' },
          { label: 'Storage Temperature', value: '-40°C to +60°C' },
          { label: 'Humidity', value: '10%-90% RH (non-condensing)' },
          { label: 'Protection Glass', value: '6mm tempered glass' }
        ],
        'CONSTRUCTION': [
          { label: 'Enclosure Material', value: 'Galvanized steel with powder coating' },
          { label: 'Ventilation', value: 'Forced air circulation with filters' },
          { label: 'Security', value: 'Multi-point locking system' },
          { label: 'Installation', value: 'Ground mount or wall mount options' }
        ]
      },
      inputs: [
        'HDMI input',
        'USB media player',
        'Ethernet connection',
        'AC power input'
      ],
      outputs: [
        'Audio output (optional speakers)',
        'Monitoring output',
        'Alarm output'
      ],
      softwareIncluded: [
        'Digital signage player software',
        'Remote monitoring system',
        'Scheduling software'
      ]
    },
       {
      id: 8,
      name: 'Logitech Rally Camera System',
      modelCode: 'LGT-RALLY',
      image: 'https://gtoffice.co.uk/wp-content/uploads/2023/02/LCD-Video-Wall-White-Background-Image-1.jpg',
      description: 'Professional 4K conference camera system with AI-powered auto-tracking and premium audio processing',
      features: ['4K Ultra HD', 'AI Auto-Tracking', 'Premium Audio'],
      layoutStyle: 'wide-small',
      inStock: true,
      isNew: true,
      category: 'Video Conferencing',
      generalFunctionality: [
        'Ultra HD 4K video with exceptional clarity',
        'AI-powered auto-tracking and framing',
        'Premium audio with advanced noise reduction',
        'Modular system for rooms of any size'
      ],
      specifications: {
        'CAMERA SPECIFICATIONS': [
          { label: 'Video Resolution', value: '4K Ultra HD (3840x2160) at 30fps' },
          { label: 'Field of View', value: '90° diagonal' },
          { label: 'Optical Zoom', value: '15x HD zoom' },
          { label: 'Pan/Tilt', value: '±130° pan, ±90° tilt' },
          { label: 'Auto-Focus', value: 'Yes, with face detection' },
          { label: 'Low Light Performance', value: 'RightLight 3 technology' }
        ],
        'AUDIO SPECIFICATIONS': [
          { label: 'Microphone Array', value: 'Beamforming microphone pods' },
          { label: 'Audio Range', value: 'Up to 5.5m (18ft) pickup range' },
          { label: 'Noise Reduction', value: 'Advanced noise and echo cancellation' },
          { label: 'Audio Processing', value: 'Acoustic echo cancellation (AEC)' },
          { label: 'Speakers', value: 'Premium speakers with bass reflex' }
        ],
        'CONNECTIVITY': [
          { label: 'Connection Type', value: 'USB 3.0' },
          { label: 'Cable Length', value: 'Up to 10m with Rally Camera' },
          { label: 'Compatibility', value: 'Works with most video conferencing apps' },
          { label: 'Mounting', value: 'Tripod mount, wall mount, ceiling mount' }
        ],
        'INTELLIGENT FEATURES': [
          { label: 'Auto-Framing', value: 'RightSight computer vision technology' },
          { label: 'Speaker Tracking', value: 'Automatic speaker detection and framing' },
          { label: 'Presets', value: 'Up to 10 camera presets' },
          { label: 'Remote Control', value: 'Included remote with dedicated buttons' }
        ]
      },
      inputs: [
        'USB 3.0 connection to host computer',
        'Power input (external adapter)',
        'Microphone pod inputs (up to 7 pods)'
      ],
      outputs: [
        'Video output via USB',
        'Audio output to speakers',
        'Control signals to camera'
      ],
      softwareIncluded: [
        'Logitech Sync device management',
        'Camera control software',
        'Firmware update utility',
        'Integration with major video platforms'
      ]
    },
    {
      id: 7,
      name: 'Hikvision Security Camera System',
      modelCode: 'HKV-8MP',
      image: 'https://gtoffice.co.uk/wp-content/uploads/2023/02/LCD-Video-Wall-White-Background-Image-1.jpg',
      description: 'Professional 8MP security camera system with advanced AI analytics and night vision capabilities',
      features: ['8MP Resolution', 'AI Analytics', 'Night Vision'],
      layoutStyle: 'medium',
      inStock: false,
      isNew: false,
      category: 'Security Systems',
      generalFunctionality: [
        'Advanced AI-powered video analytics',
        'Smart motion detection and tracking',
        '24/7 continuous monitoring capabilities',
        'Remote access and mobile app control'
      ],
      specifications: {
        'CAMERA SPECIFICATIONS': [
          { label: 'Resolution', value: '8MP (3840×2160)' },
          { label: 'Sensor Type', value: '1/2.5" Progressive Scan CMOS' },
          { label: 'Min. Illumination', value: '0.01 Lux @F1.2' },
          { label: 'IR Range', value: 'Up to 30m' },
          { label: 'Lens', value: '2.8mm, 4mm, 6mm fixed lens' },
          { label: 'Field of View', value: '2.8mm: 103°, 4mm: 79°, 6mm: 54°' }
        ],
        'VIDEO FEATURES': [
          { label: 'Video Compression', value: 'H.265+/H.265/H.264+/H.264' },
          { label: 'Max Framerate', value: '25fps (3840×2160)' },
          { label: 'Video Bitrate', value: '32Kbps to 16Mbps' },
          { label: 'Smart Features', value: 'Line crossing, intrusion detection, region entrance/exit' },
          { label: 'Audio', value: 'Built-in microphone, external audio input/output' }
        ],
        'NETWORK & STORAGE': [
          { label: 'Network Interface', value: '10M/100M Ethernet' },
          { label: 'Protocol', value: 'TCP/IP, UDP, RTSP, HTTP, HTTPS, FTP' },
          { label: 'Storage', value: 'NAS, micro SD card up to 256GB' },
          { label: 'Power', value: 'PoE (802.3at, class 4)' }
        ]
      },
      inputs: [
        'Audio input (line in)',
        'Alarm input x1',
        'Power input (PoE)'
      ],
      outputs: [
        'Audio output (line out)',
        'Alarm output x1',
        'Network output (RJ45)'
      ],
      softwareIncluded: [
        'iVMS-4200 client software',
        'Mobile app (Hik-Connect)',
        'Web browser interface'
      ]
    }
 
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const getCardStyle = (layoutStyle) => {
    switch (layoutStyle) {
      case 'hero':
        return 'col-span-12 md:col-span-8 lg:col-span-6 row-span-3';
      case 'wide':
        return 'col-span-12 md:col-span-8 lg:col-span-6 row-span-2';
      case 'tall':
        return 'col-span-6 md:col-span-4 lg:col-span-3 row-span-3';
      case 'medium':
        return 'col-span-6 md:col-span-4 lg:col-span-3 row-span-2';
      case 'small':
        return 'col-span-6 md:col-span-4 lg:col-span-3 row-span-';
      case 'wide-small':
        return 'col-span-12 md:col-span-6 lg:col-span-6 row-span-1';
      default:
        return 'col-span-6 md:col-span-4 lg:col-span-3 row-span-2';
    }
  };

  const getImageHeight = (layoutStyle) => {
    switch (layoutStyle) {
      case 'hero':
        return 'h-80';
      case 'wide':
        return 'h-48';
      case 'tall':
        return 'h-96 lg:h-140';
      case 'medium':
        return 'h-40';
      case 'small':
        return 'h-32';
      case 'wide-small':
        return 'h-40';
      default:
        return 'h-48';
    }
  };

  return (
    <>
      <section 
        id="products" 
        className="py-20 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f5f9 100%)'
        }}
      >
        {/* ... existing background elements and header ... */}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className={`mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full mb-8 backdrop-blur-md border"
                   style={{ 
                     backgroundColor: 'rgba(63, 184, 246, 0.1)', 
                     borderColor: 'rgba(63, 184, 246, 0.2)' 
                   }}>
                <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#3fb8f6' }}></div>
                <span className="text-sm font-semibold tracking-wide" style={{ color: '#3fb8f6' }}>
                  PROFESSIONAL DISPLAY SOLUTIONS
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6"
                  style={{ 
                    color: '#040404', 
                    fontFamily: '"Inter", sans-serif'
                  }}>
                Our <span style={{ 
                  background: 'linear-gradient(135deg, #3fb8f6 0%, #6c6ffb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Products</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#6e6e6e' }}>
                Cutting-edge display technology designed to transform your business environment
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div 
              className="grid gap-6 auto-rows-[minmax(100px,auto)]"
              style={{
                gridTemplateColumns: 'repeat(12, 1fr)'
              }}
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`group cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 ${getCardStyle(product.layoutStyle)}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Card */}
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500"
                       style={{
                         border: `1px solid ${hoveredProduct === product.id ? '#3fb8f6' : '#f0f0f0'}`,
                         boxShadow: hoveredProduct === product.id 
                           ? '0 25px 50px rgba(63, 184, 246, 0.15)' 
                           : '0 10px 30px rgba(0, 0, 0, 0.08)'
                       }}>
                    
                    {/* Status Badges */}
                    {/* <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                      {product.isNew && (
                        <div className="px-3 py-1 text-white text-xs font-bold rounded-full shadow-lg"
                             style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}>
                          NEW
                        </div>
                      )}
                      <div className={`px-3 py-1 text-white text-xs font-bold rounded-full shadow-lg`}
                           style={{ 
                             background: product.inStock 
                               ? 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' 
                               : 'linear-gradient(135deg, #848484, #6e6e6e)'
                           }}>
                        {product.inStock ? 'IN STOCK' : 'COMING SOON'}
                      </div>
                    </div> */}

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md"
                           style={{ 
                             backgroundColor: 'rgba(255, 255, 255, 0.9)',
                             color: '#4f4f4f',
                             border: '1px solid rgba(255, 255, 255, 0.2)'
                           }}>
                        {product.category}
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className={`relative overflow-hidden ${getImageHeight(product.layoutStyle)}`}
                         style={{ backgroundColor: '#f8f9fa' }}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/600x400/f8f9fa/3fb8f6?text=Display+Solution';
                        }}
                      />
                      
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                           style={{ background: 'linear-gradient(to top, rgba(4, 4, 4, 0.3), transparent)' }}></div>
                      
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md"
                             style={{ backgroundColor: 'rgba(63, 184, 246, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${product.layoutStyle === 'hero' ? 'p-8' : product.layoutStyle === 'small' ? 'p-4' : 'p-6'}`}>
                      
                      <h3 className={`font-bold mb-3 transition-colors duration-300 ${
                        product.layoutStyle === 'hero' ? 'text-2xl' : 
                        product.layoutStyle === 'small' ? 'text-base' : 'text-lg'
                      }`}
                          style={{ 
                            color: hoveredProduct === product.id ? '#3fb8f6' : '#040404'
                          }}>
                        {product.name}
                      </h3>
                      
                      {product.layoutStyle !== 'small' && (
                        <p className={`mb-4 leading-relaxed ${
                          product.layoutStyle === 'hero' ? 'text-base' : 'text-sm'
                        }`} 
                           style={{ color: '#6e6e6e' }}>
                          {product.description}
                        </p>
                      )}

                      <div className="space-y-2 mb-6">
                        {product.features.slice(0, product.layoutStyle === 'hero' ? 3 : product.layoutStyle === 'small' ? 1 : 2).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full"
                                 style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}></div>
                            <span className={`font-medium ${
                              product.layoutStyle === 'small' ? 'text-xs' : 'text-sm'
                            }`} 
                                  style={{ color: '#4f4f4f' }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={() => handleLearnMore(product)}
                        className={`w-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl ${
                          product.layoutStyle === 'small' ? 'py-2 px-4 text-sm' : 'py-3 px-6 text-sm'
                        }`}
                        style={{
                          background: product.inStock 
                            ? hoveredProduct === product.id 
                              ? 'linear-gradient(135deg, #6c6ffb, #3fb8f6)' 
                              : 'linear-gradient(135deg, #3fb8f6, #6c6ffb)'
                            : 'linear-gradient(135deg, #848484, #6e6e6e)',
                          cursor: product.inStock ? 'pointer' : 'not-allowed'
                        }}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? 'Learn More' : 'Notify Me'}
                      </button>
                    </div>

                    <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5">
                      <div className="absolute bottom-0 right-0 w-full h-full rounded-tl-full"
                           style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          {/* <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center p-8 rounded-2xl backdrop-blur-xl border"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)',
                   borderColor: 'rgba(63, 184, 246, 0.1)',
                   boxShadow: '0 20px 60px rgba(0,0,0,0.05)'
                 }}>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#040404' }}>
                Need a Custom Solution?
              </h3>
              <p className="mb-8 max-w-md text-lg" style={{ color: '#6e6e6e' }}>
                Our specialists design tailored display solutions for your unique requirements.
              </p>
              <button className="px-8 py-4 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}>
                Start Your Project
              </button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Product Details Modal */}
      <ProductDetailsModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Products;