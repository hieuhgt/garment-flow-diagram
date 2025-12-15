import { Home, Store, Warehouse, Layers, ArrowRight, Package, ShoppingBag } from "lucide-react";
import shirtAndPantsInPolybags from "@assets/generated_images/shirt_and_pants_in_separate_polybags_in_one_carton.png";
import outerCartonWithMixedSizes from "@assets/generated_images/outer_carton_with_mixed_size_inner_boxes.png";
import palletWithMixedSizes from "@assets/generated_images/pallet_with_mixed_size_boxes.png";

export default function PackingMethods() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Garment Packing Methods
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            Home vs Store vs DC/Warehouse
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Column 1: Delivery to Home */}
          <Card 
            title="Delivery to Home Address"
            subtitle="(Direct to Customer)"
            icon={<Home className="w-8 h-8 text-blue-600" />}
          >
            <div className="flex-1 flex flex-col items-center justify-center w-full space-y-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-blue-100/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={shirtAndPantsInPolybags} 
                  alt="Shirt and pants in separate polybags in one carton" 
                  className="relative w-64 h-64 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                 <div className="absolute bottom-4 right-0 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-600 border border-slate-200 shadow-sm">
                  Customer Address
                </div>
              </div>
              
              <div className="w-full bg-blue-50/50 rounded-lg p-4 border border-blue-100 text-center space-y-2">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                   Group garments in one carton by customer address
                </p>
              </div>

              <div className="w-full mt-auto pt-4 border-t border-slate-100">
                 <SingleLayerPackingInfo />
              </div>
            </div>
          </Card>

          {/* Column 2: Delivery to Store */}
          <Card 
            title="Delivery to Store"
            subtitle=""
            icon={<Store className="w-8 h-8 text-blue-600" />}
          >
            <div className="flex-1 flex flex-col items-center justify-center w-full space-y-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-blue-100/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={outerCartonWithMixedSizes} 
                  alt="Carton with mixed size inner boxes" 
                  className="relative w-64 h-64 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-0 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-600 border border-slate-200 shadow-sm">
                  Store Address
                </div>
              </div>

              <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-center space-y-2">
                 <p className="text-sm text-slate-600 leading-relaxed">
                   Group garments in one inner box & carton by customer address or/and store address
                 </p>
                 <p className="text-xs text-amber-600 font-medium border-t border-slate-200 pt-2 mt-1">
                   * Inner box is not always required, it's an option to configure
                 </p>
              </div>

               {/* Store Flow Diagram - Neutral Colors */}
              <div className="w-full grid grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col items-center text-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                     <ShoppingBag className="w-4 h-4" />
                   </div>
                   <div className="space-y-1">
                     <span className="text-xs font-bold text-slate-700 block">Pickup</span>
                     <span className="text-[10px] text-slate-500 leading-tight block">Customer picks up from store</span>
                   </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col items-center text-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                     <Home className="w-4 h-4" />
                   </div>
                   <div className="space-y-1">
                     <span className="text-xs font-bold text-slate-700 block">Delivery</span>
                     <span className="text-[10px] text-slate-500 leading-tight block">Store delivers to customer home</span>
                   </div>
                </div>
              </div>

              <div className="w-full mt-auto pt-4 border-t border-slate-100">
                 <PackingLayersInfo />
              </div>
            </div>
          </Card>

          {/* Column 3: Delivery to DC */}
          <Card 
            title="Delivery to DC / Warehouse"
            subtitle="(MTM Consolidation)"
            icon={<Warehouse className="w-8 h-8 text-blue-600" />}
          >
            <div className="flex-1 flex flex-col items-center justify-center w-full space-y-6">
              
              {/* Main Visual: 2-Layer Packing */}
               <div className="relative group">
                <div className="absolute -inset-2 bg-blue-100/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={palletWithMixedSizes} 
                  alt="Pallet with mixed size boxes" 
                  className="relative w-64 h-64 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-0 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-600 border border-slate-200 shadow-sm">
                  DC Address
                </div>
              </div>

              {/* MTM Description */}
              <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-center space-y-2">
                 <p className="text-sm text-slate-600 leading-relaxed">
                   Group garments in one inner box & carton by customer address or/and store address
                 </p>
                 <p className="text-xs text-amber-600 font-medium border-t border-slate-200 pt-2 mt-1">
                   * Inner box is not always required, it's an option to configure
                 </p>
              </div>

              {/* DC Flow Diagram - Neutral Colors */}
              <div className="w-full grid grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col items-center text-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                     <Store className="w-4 h-4" />
                   </div>
                   <div className="space-y-1">
                     <span className="text-xs font-bold text-slate-700 block">Replenishment</span>
                     <span className="text-[10px] text-slate-500 leading-tight block">DC &rarr; Store</span>
                   </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col items-center text-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                     <Home className="w-4 h-4" />
                   </div>
                   <div className="space-y-1">
                     <span className="text-xs font-bold text-slate-700 block">Direct</span>
                     <span className="text-[10px] text-slate-500 leading-tight block">DC &rarr; Customer</span>
                   </div>
                </div>
              </div>

               <div className="w-full mt-auto pt-4 border-t border-slate-100">
                 <PackingLayersInfo />
              </div>
            </div>
          </Card>

        </div>

        <div className="text-center pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-400">Confidential - Internal Use Only</p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, subtitle, icon, children }: { title: string, subtitle: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-slate-50 bg-slate-50/50 flex flex-col items-center text-center gap-3">
        <div className="p-3 bg-white rounded-full shadow-sm border border-slate-100">
          {icon}
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-700">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function PackingLayersInfo() {
    return (
        <div className="bg-amber-50/50 border border-amber-100 rounded-lg p-3 space-y-2">
            <div className="flex items-center gap-2 text-amber-700 mb-1">
                <Layers className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">2-Layer Packing</span>
            </div>
            <div className="space-y-1.5 pl-1">
                <div className="flex gap-2 text-xs text-slate-700">
                    <span className="font-bold text-amber-600">Layer 1:</span>
                    <span>Packed in small polybag inside big polybag or small carton (Inner Box)</span>
                </div>
                <div className="flex gap-2 text-xs text-slate-700">
                     <span className="font-bold text-amber-600">Layer 2:</span>
                     <span>Pack inner box into big outer carton</span>
                </div>
            </div>
        </div>
    )
}

function SingleLayerPackingInfo() {
    return (
        <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 space-y-2">
            <div className="flex items-center gap-2 text-blue-700 mb-1">
                <Package className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">1-Layer Packing</span>
            </div>
            <div className="space-y-1.5 pl-1">
                <div className="flex gap-2 text-xs text-slate-700">
                    <span className="font-bold text-blue-600">Standard:</span>
                    <span>Individual polybag packed directly into shipping carton.</span>
                </div>
            </div>
        </div>
    )
}
