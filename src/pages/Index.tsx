import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/b620157b-42e2-41e0-bea7-a5b812bcb3e6.svg" 
                alt="SOUL MUSIC Logo" 
                className="w-12 h-10 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">SOUL MUSIC</h1>
                <p className="text-sm text-blue-600">Музыкальный лейбл</p>
              </div>
            </div>
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              Платежная система
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-3">
            Оплата дистрибуции сингла
          </h2>
          <p className="text-blue-700 text-lg">
            Завершите оплату для начала распространения вашего трека
          </p>
        </div>

        {/* Payment Card */}
        <Card className="shadow-lg border-blue-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <span className="text-xl">Детали заказа</span>
              <Icon name="CreditCard" size={24} />
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            {/* Service Details */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Услуга:</span>
                <span className="text-blue-900 font-semibold">Дистрибуция</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Тип тарифа:</span>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Базовый
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Тип релиза:</span>
                <div className="flex items-center space-x-2">
                  <Icon name="Music2" size={16} className="text-blue-600" />
                  <span className="text-blue-900 font-semibold">Single</span>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            {/* Price Section */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">Итого к оплате:</span>
                <span className="text-3xl font-bold text-blue-900">250₽</span>
              </div>
            </div>

            {/* Payment Button */}
            <Button 
              className="w-full py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
              size="lg"
            >
              <Icon name="Lock" size={20} className="mr-2" />
              Оплатить 250₽
            </Button>

            {/* Security Info */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Icon name="Shield" size={16} className="text-green-600" />
              <span>Безопасная оплата SSL</span>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-blue-100 p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
            <Icon name="Info" size={20} className="mr-2" />
            Что включает базовый тариф
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <Icon name="Check" size={16} className="text-green-600 mr-2" />
              Загрузка на основные площадки (Spotify, Apple Music, Яндекс.Музыка)
            </li>
            <li className="flex items-center">
              <Icon name="Check" size={16} className="text-green-600 mr-2" />
              Статистика прослушиваний
            </li>
            <li className="flex items-center">
              <Icon name="Check" size={16} className="text-green-600 mr-2" />
              Техническая поддержка
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/bb871d73-66ed-40fc-a5c6-4e80393bf2dc.jpg" 
                alt="SOUL MUSIC Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-blue-900 font-semibold">SOUL MUSIC</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors flex items-center">
                <Icon name="MessageCircle" size={16} className="mr-1" />
                Поддержка
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors flex items-center">
                <Icon name="FileText" size={16} className="mr-1" />
                Договор
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors flex items-center">
                <Icon name="Shield" size={16} className="mr-1" />
                Политика
              </a>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="text-center text-sm text-gray-500">
            © 2024 SOUL MUSIC. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}